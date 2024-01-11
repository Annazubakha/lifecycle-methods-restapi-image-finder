import React, { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPress);
  }
  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal('');
    }
  };

  handleEscPress = event => {
    if (event.code === 'Escape') this.props.closeModal('');
  };
  render() {
    return (
      <div className={s.Overlay}>
        <div onClick={this.handleBackdropClick} className={s.Modal}>
          <img src={this.props.url} alt="" width="70%" />
        </div>
      </div>
    );
  }
}
