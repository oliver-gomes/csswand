import React, { Component } from "react";
import { SketchPicker } from "react-color";
import { css } from "emotion";
import { Modal, Icon } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class ColorPicker extends Component {
  state = {
    visible: false,
    background: "#1d9af2",
    copiedHTML: false,
    copiedCSS: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div>
        <i
          class="fas fa-eye-dropper fa-lg"
          onClick={this.showModal}
          style={{ marginTop: "40px", cursor: "pointer", color: "#24ff9f" }}
        />

        <Modal
          title="CSS Wand Color Picker"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
            `}
          >
            <SketchPicker
              disableAlpha={true}
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>

          <div
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 20px 180px;
            `}
          >
            <div
              className={css`
                display: inline-block;
                height: 20px;
                width: 20px;
                border-radius: 5px;
                margin-right: 10px;
                background-color: ${this.state.background};
              `}
            />
            <CopyToClipboard
              text={this.state.background.toString()}
              onCopy={() => this.setState({ copiedHTML: true })}
            >
              <button
                className={css`
                  color: ${this.state.background};
                  background-color: #292d3e;
                  border: 1px solid ${this.state.background};
                  border-radius: 4px;
                  padding: 0 15px;
                  cursor: pointer;
                  height: 32px;
                  font-size: 14px;
                `}
              >
                {this.state.background}
              </button>
            </CopyToClipboard>
          </div>
          {this.state.copiedHTML ? (
            <span
              className={css`
                @keyframes fade-in-right {
                  from {
                    opacity: 0;
                    transform: translateX(-15px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }

                @keyframes grow-left {
                  from {
                    transform: scaleX(0);
                  }
                  to {
                    transform: scaleX(1);
                  }
                }

                opacity: 0;
                animation: fade-in-right ease 0.4s forwards;
                float: left;
                color: #1d9af2;
              `}
            >
              Copied
            </span>
          ) : null}

          <p
            className={css`
              margin-top: 50px;
            `}
          >
            Click on the Button to copy the selected color
          </p>
        </Modal>
      </div>
    );
  }
}
