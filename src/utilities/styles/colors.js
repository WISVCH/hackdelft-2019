export const hslToRgb = (h, s, l) => {
  const hh = h / 360
  const ss = s / 100
  const ll = l / 100

  if (ss === 0) {
    return Array(3).fill(255 * ll)
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1/6) return p + (q - p) * 6 * t
      if (t < 1/2) return q
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
      return p
    }

    const q = ll < 0.5 ? ll * (1 + ss) : ll + ss - ll * ss
    const p = 2 * ll - q

    return [
      255 * hue2rgb(p, q, hh + 1/3),
      255 * hue2rgb(p, q, hh),
      255 * hue2rgb(p, q, hh - 1/3),
    ]
  }
}

export const rgbToHsl = (r, g, b) => {
    const rr = r / 255
    const gg = g / 255
    const bb = b / 255

    const max = Math.max(rr, gg, bb)
    const min = Math.min(rr, gg, bb)
    let h, s, l = (max + min) / 2

    if (max === min) {
      h = s = 0 // achromatic
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
          case rr: h = (gg - bb) / d + (gg < bb ? 6 : 0); break
          case gg: h = (bb - rr) / d + 2; break
          case bb: h = (rr - gg) / d + 4; break
          default: h = 0
      }
      h /= 6
    }

    return [360 * h, 100 * s, 100 * l]
}

export const getColorFormat = color => {
  const formats = {
    // #fff
    singleHex: /^#([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/,
    // #ffffff
    doubleHex: /^#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/,
    // rgb(r, g, b)
    rgb:       /^rgb\(([0-9]{1,3}),\s*([0-9]{1,3}),\s*([0-9]{1,3})\)$/,
    // rgba(r, g, b, a)
    rgba:      /^rgba\(([0-9]{1,3}),\s*([0-9]{1,3}),\s*([0-9]{1,3}),\s*([0-9]*.?[0-9]*)\)$/,
    // hsl(h, s%, l%)
    hsl:       /^hsl\(([0-9]{1,3}),\s*([0-9]{1,3})%,\s*([0-9]{1,3})%\)$/,
    // hsla(h, s%, l%, a)
    hsla:      /^hsla\(([0-9]{1,3}),\s*([0-9]{1,3})%,\s*([0-9]{1,3})%,\s*([0-9]*.?[0-9]*)\)$/,
  }

  const format = Object.keys(formats)
    .find(format => formats[format].test(color))

  return format
    ? {
      format,
      values: color.match(formats[format]).slice(1)
    }
    : null
}

class Color {
  constructor(colorString) {
    const { format, values } = getColorFormat(colorString)
    this.format = format
    this.values = values
  }

  toRgba() {
    switch (this.format) {
      case 'singleHex':
        this.values = [...this.values.map(c => parseInt(c.repeat(2), 16)), 1]; break
      case 'doubleHex':
        this.values = [...this.values.map(c => parseInt(c, 16)), 1]; break
      case 'rgb':
        this.values = [...this.values, 1]; break
      case 'rgba': break
      case 'hsl':
        this.values = [...hslToRgb(...this.values), 1]; break
      case 'hsla':
        this.values = [...hslToRgb(...this.values), this.values[3]]; break
      default: break
    }
    this.format = 'rgba'
    return this
  }

  toHsla() {
    switch (this.format) {
      case 'singleHex':
      case 'doubleHex':
        this.toRgba()
        this.values = [...rgbToHsl(...this.values), this.values[3]]; break
      case 'rgb':
        this.values = [...rgbToHsl(...this.values), 1]; break
      case 'rgba':
        this.values = [...rgbToHsl(...this.values), this.values[3]]; break
      case 'hsl':
        this.values = [...this.values, 1]; break
      case 'hsla': break
      default: break;
    }
    this.format = 'hsla'
    return this
  }

  toColorString() {
    switch (this.format) {
      case 'singleHex':
      case 'doubleHex':
        return `#${this.values[0]}${this.values[1]}${this.values[2]}`
      case 'rgb':
        return `rgb(${this.values[0]}, ${this.values[1]}, ${this.values[2]})`
      case 'rgba':
        return `rgba(${this.values[0]}, ${this.values[1]}, ${this.values[2]}, ${this.values[3]})`
      case 'hsl':
        return `hsl(${this.values[0]}, ${this.values[1]}%, ${this.values[2]}%)`
      case 'hsla':
        return `hsla(${this.values[0]}, ${this.values[1]}%, ${this.values[2]}%, ${this.values[3]})`
      default:
        return null
    }
  }

  setAlpha(alpha) {
    if (this.format !== 'rgba' && this.format !== 'hsla') {
      this.format === 'hsl'
        ? this.toHsla()
        : this.toRgba()
    }

    this.values[3] = alpha
    return this
  }
}

export const opacity = (color, alpha=1) =>
  (new Color(color))
    .setAlpha(alpha)
    .toColorString()

export const modifyHsla = (h, s, l, a) => color => {
  const c = new Color(color)
  c.toHsla()

  c.values[0] = Math.max(0, Math.min(c.values[0] + h, 360))
  c.values[1] = Math.max(0, Math.min(c.values[1] + s, 100))
  c.values[2] = Math.max(0, Math.min(c.values[2] + l, 100))
  c.values[3] = Math.max(0, Math.min(c.values[3] + a, 1))

  return c.toColorString()
}

export const lighten = (color, amount=0) => modifyHsla(0, 0, amount, 0)(color)
export const darken = (color, amount=0) => modifyHsla(0, 0, -amount, 0)(color)
