import React, { Component } from 'react';
import styled from 'styled-components';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import Dropper from './Header/Dropper';
import SvgLogo from '../assets/SvgLogo';
import SvgLogoCH from '../assets/SvgLogoCH';

const styles = {
  whiteButton: {
    backgroundColor: 'white',
    color: 'rgb(104, 79, 163)',
    fontSize: '18px'
  }
};

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 450px;
  box-shadow: 0px -10px 8px 10px rgba(0, 0, 0, 0.9);
  background: rgba(38, 29, 60, 1);
  background: -moz-linear-gradient(
    top,
    rgba(38, 29, 60, 1) 0%,
    rgba(104, 79, 163, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(38, 29, 60, 1)),
    color-stop(100%, rgba(104, 79, 163, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(38, 29, 60, 1) 0%,
    rgba(104, 79, 163, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(38, 29, 60, 1) 0%,
    rgba(104, 79, 163, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(38, 29, 60, 1) 0%,
    rgba(104, 79, 163, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(38, 29, 60, 1) 0%,
    rgba(104, 79, 163, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#1e3f1c',
      endColorstr='#0c8040',
      GradientType=0
    );
  @media only screen and (max-width: 700px) {
    height: 400px;
  }
  @media only screen and (max-width: 600px) {
    height: 350px;
  }
  @media only screen and (max-width: 500px) {
    height: 300px;
  }
`;

const FlowAway = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(38, 29, 60, 1);
  background: -moz-linear-gradient(
    top,
    rgba(38, 29, 60, 1) 0%,
    rgba(40, 30, 62, 1) 2%,
    rgba(43, 33, 67, 0) 7%,
    rgba(100, 76, 156, 0) 93%,
    rgba(103, 78, 161, 1) 98%,
    rgba(104, 79, 163, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(38, 29, 60, 1)),
    color-stop(2%, rgba(40, 30, 62, 1)),
    color-stop(7%, rgba(43, 33, 67, 0)),
    color-stop(93%, rgba(100, 76, 156, 0)),
    color-stop(98%, rgba(103, 78, 161, 1)),
    color-stop(100%, rgba(104, 79, 163, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(38, 29, 60, 1) 0%,
    rgba(40, 30, 62, 1) 2%,
    rgba(43, 33, 67, 0) 7%,
    rgba(100, 76, 156, 0) 93%,
    rgba(103, 78, 161, 1) 98%,
    rgba(104, 79, 163, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(38, 29, 60, 1) 0%,
    rgba(40, 30, 62, 1) 2%,
    rgba(43, 33, 67, 0) 7%,
    rgba(100, 76, 156, 0) 93%,
    rgba(103, 78, 161, 1) 98%,
    rgba(104, 79, 163, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(38, 29, 60, 1) 0%,
    rgba(40, 30, 62, 1) 2%,
    rgba(43, 33, 67, 0) 7%,
    rgba(100, 76, 156, 0) 93%,
    rgba(103, 78, 161, 1) 98%,
    rgba(104, 79, 163, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(38, 29, 60, 1) 0%,
    rgba(40, 30, 62, 1) 2%,
    rgba(43, 33, 67, 0) 7%,
    rgba(100, 76, 156, 0) 93%,
    rgba(103, 78, 161, 1) 98%,
    rgba(104, 79, 163, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#261d3c',
      endColorstr='#684fa3',
      GradientType=0
    );
`;

const DateContainer = styled.div`
  float: left;
  margin-top: 8px;
  margin-left: 10%;
  color: white;
  font-size: 17px;
  line-height: 17px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.7));
  @media only screen and (min-width: 800px) {
    margin-left: calc(50% - 320px);
  }
  @media only screen and (max-width: 700px) {
    ::after {
      content: ' — TU Delft';
    }
  }
`;
const LocationContainer = styled.div`
  float: right;
  margin-top: 8px;
  margin-right: 10%;
  color: white;
  font-size: 17px;
  line-height: 17px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.7));
  @media only screen and (min-width: 800px) {
    margin-right: calc(50% - 320px);
  }
  @media only screen and (max-width: 700px) {
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
`;

const LogoContainer = styled.div`
  float: left;
  width: 80%;
  padding-top: 115px;
  margin: 0 10% 0 10%;
  @media only screen and (min-width: 800px) {
    width: 640px;
    margin: 0 calc(50% - 320px) 0 calc(50% - 320px);
  }
  @media only screen and (max-width: 940px) {
    padding-top: 170px;
  }
  @media only screen and (max-width: 800px) {
    padding-top: 150px;
  }
  @media only screen and (max-width: 700px) {
    padding-top: 140px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 500px) {
  }
  @media only screen and (max-width: 400px) {
  }
`;

const LogoContainerCH = styled.a`
  position: absolute;
  display: block;
  top: 10px;
  left: 10px;
  width: 221px;
  svg {
    fill: white;
    float: left;
    height: 70px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));
  }
  svg:hover {
    fill: url(#img1);
  }
  @media only screen and (max-width: 700px) {
    width: 54px;
    svg {
    }
  }
  @media only screen and (max-width: 500px) {
    svg {
      height: 55px;
    }
  }
  @media only screen and (max-width: 400px) {
    svg {
      height: 40px;
    }
  }
`;

const DropperContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const RegisterContainer = styled.div`
  width: 100%;
  float: left;
  padding-top: 50px;
  text-align: center;
  @media only screen and (max-width: 700px) {
    padding-top: 40px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 35px;
  }
  @media only screen and (max-width: 500px) {
    padding-top: 30px;
  }
  @media only screen and (max-width: 400px) {
    padding-top: 25px;
  }
`;

const dropperContent = [
  'hackdelft',
  'hackdelft',
  'hackdelft',
  'hackdelft',
  'hackdelft',

  'games',
  'app',
  'web',
  'network',
  'vr',

  'delft',
  'university',
  'technology',
  'eemcs',
  'maker',

  'hackathon',
  'hackathon',
  'hackathon',
  'hackathon',
  'hackathon',

  'bug'
];

const high = 120;
const mid = 60;
const low = 30;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.getAppropriateAmount(this.screenWidth())
    };

    window.addEventListener('resize', this.checkScreenWidth);
  }

  checkScreenWidth = () => {
    var amount = this.getAppropriateAmount(this.screenWidth());
    if (amount !== this.state.amount) {
      this.setState({ amount: amount });
    }
  };

  getAppropriateAmount = width => {
    if (width < 600) return low;
    if (width >= 1000) return high;
    return mid;
  };

  screenWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.documentElement.clientWidth
    );
  };

  render() {
    return (
      <Wrapper>
        <DropperContainer>
          <Dropper content={dropperContent} min={this.state.amount} />
        </DropperContainer>
        <FlowAway />
        <LogoContainerCH href="https://ch.tudelft.nl" target="_blank">
          <SvgLogoCH />
        </LogoContainerCH>
        <LogoContainer>
          <SvgLogo
            fill="white"
            style={{ filter: 'drop-shadow( 0px 0px 8px rgba(0,0,0,0.7) )' }}
          />
        </LogoContainer>
        <DateContainer>May 11 - 12, 2019</DateContainer>
        <LocationContainer>Delft University of Technology</LocationContainer>
        <RegisterContainer>
          <Button
            variant="raised"
            href="https://docs.google.com/forms/d/e/1FAIpQLSclL3WjOS6_0F1iv5gZJgbVCxZ2QwZR2QnFGZlKEwMaJcciYw/viewform"
            className={this.props.classes.whiteButton}
            target="_blank"
          >
            Registration closed
          </Button>
        </RegisterContainer>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(Header);
