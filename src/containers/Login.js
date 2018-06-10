import React, { Component } from "react";
import "../index.css";
import "./Login.css";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
    render() {
      return (
        <div className="">
          <div id="u12538" className="ax_default" data-label="Header Top Bar" >
              <div id="u12538_state0" className="panel_state" data-label="State1">
                <div id="u12538_state0_content" class="panel_state_content">
                </div>
              </div>
          </div>
          <div id="u12540" className="ax_default paragraph">
              <div id="u12540_div" className=""></div>
              <div id="u12540_text" className="text ">
                <p><span>B2B Demonstration Portal</span></p>
              </div>
          </div>
          <div id="u12542" className="ax_default image" data-label="Logo">
              <img id="u12542_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/log_in/logo_u12542.png?token=f928fd2d2f8669f566ecb17c10796f40"/>
          </div>
          <div id="u12499" className="ax_default" data-label="Banner" data-left="0" data-top="135" data-width="1400" data-height="600">
              <div id="u12500" className="ax_default" data-label="Banner Image">
                <div id="u12500_state0" className="panel_state" data-label="State1">
                    <div id="u12500_state0_content" className="panel_state_content">
                    </div>
                </div>
              </div>
          </div>
          <div id="u12518" className="ax_default paragraph">
              <div id="u12518_div" className=""></div>
              <div id="u12518_text" className="text ">
                <p><span>This is a paragraph. Praesent hen drerit nulla quis sapien suscipit a malesuada turpis tristique. Praesent sit amet ipsum eleifend.</span></p>
              </div>
          </div>
          <div id="u12527" className="ax_default" data-label="Feature" data-left="711" data-top="420" data-width="180" data-height="174">
              <div id="u12528" className="ax_default box_1">
                <div id="u12528_div" className=""></div>
              </div>
              <div id="u12529" className="ax_default ellipse">
                <img id="u12529_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/log_in/u12521.png?token=84cafe289d6b460e218b8335fef049aa"/>
                <div id="u12529_text" className="text ">
                    <p><span></span></p>
                </div>
              </div>
              <div id="u12530" className="ax_default heading_3">
                <div id="u12530_div" className=""></div>
                <div id="u12530_text" className="text ">
                    <p><span>Portal</span></p>
                    <p><span>feature</span></p>
                </div>
              </div>
          </div>
          <div id="u12501" className="ax_default" data-label="Log In Box" data-left="100" data-top="235" data-width="510" data-height="390">
              <div id="u12502" className="ax_default box_1">
                <img id="u12502_img" className="img " src="https://d2v8ggac1o0f6z.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/log_in/u12502.png?token=cf9606807f20e0c111454387451703fe"/>
              </div>
              <div id="u12503" className="ax_default" data-label="Input field - Standard XL" data-left="153" data-top="359" data-width="407" data-height="62">
                <div id="u12504" className="ax_default box_1" data-label="Border">
                    <div id="u12504_div" className=""></div>
                </div>
                <div id="u12505" className="ax_default text_field" data-label="Input">
                    <input id="u12505_input" type="text" value="gary.gordon@weaveability.com" tabindex="0"/>
                </div>
                <div id="u12506" className="ax_default label" data-label="Label">
                    <div id="u12506_div" className=""></div>
                    <div id="u12506_text" className="text ">
                      <p><span>Username / Email address</span></p>
                    </div>
                </div>
              </div>
              <div id="u12507" className="ax_default" data-label="Input field - Standard XL" data-left="153" data-top="446" data-width="407" data-height="62">
                <div id="u12508" className="ax_default box_1" data-label="Border">
                    <div id="u12508_div" className=""></div>
                </div>
                <div id="u12509" className="ax_default text_field" data-label="Input">
                    <input id="u12509_input" type="text" value="**********" tabindex="0"/>
                </div>
                <div id="u12510" className="ax_default label" data-label="Label">
                    <div id="u12510_div" className=""></div>
                    <div id="u12510_text" className="text ">
                      <p><span>Password</span></p>
                    </div>
                </div>
              </div>
              <div id="u12511" className="ax_default button_primary" data-label="Emphasised button cursor">
                <div id="u12511_div" className="" tabindex="0"></div>
                <div id="u12511_text" className="text ">
                    <p id="cache12"><span id="cache13">Log in</span></p>
                </div>
              </div>
              <div id="u12512" className="ax_default button_secondary" data-label="Default button cursor">
                <div id="u12512_div" className="" tabindex="0"></div>
                <div id="u12512_text" className="text ">
                    <p id="cache14"><span id="cache15">Register</span></p>
                </div>
              </div>
              <div id="u12513" className="ax_default paragraph">
                <div id="u12513_div" className=""></div>
                <div id="u12513_text" className="text ">
                    <p><span>or</span></p>
                </div>
              </div>
              <div id="u12514" className="ax_default paragraph">
                <div id="u12514_div" className=""></div>
                <div id="u12514_text" className="text ">
                    <p><span>Forgot password</span></p>
                </div>
              </div>
              <div id="u12515" className="ax_default box_1">
                <img id="u12515_img" className="img " src="https://d26uhratvi024l.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/log_in/u12515.png?token=9e51756253e72fb12cfccb1f411e635c"/>
              </div>
              <div id="u12516" className="ax_default materialicons">
                <div id="u12516_div" className=""></div>
                <div id="u12516_text" className="text ">
                    <p><span></span></p>
                </div>
              </div>
              <div id="u12517" className="ax_default paragraph">
                <div id="u12517_div" className=""></div>
                <div id="u12517_text" className="text ">
                    <p><span>Log in to your account</span></p>
                </div>
              </div>
          </div>
          <div id="u12524" className="ax_default box_1">
              <div id="u12524_div" className=""></div>
          </div>
          <div id="u12525" className="ax_default ellipse">
              <img id="u12525_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/log_in/u12521.png?token=84cafe289d6b460e218b8335fef049aa"/>
              <div id="u12525_text" className="text ">
                <p><span></span></p>
              </div>
          </div>
          <div id="u12526" className="ax_default heading_3">
              <div id="u12526_div" className=""></div>
              <div id="u12526_text" className="text ">
                <p><span>Portal</span></p>
                <p><span>feature</span></p>
              </div>
          </div>
          <div id="u12519" className="ax_default" data-label="Feature" data-left="1121" data-top="420" data-width="180" data-height="174">
              <div id="u12520" className="ax_default box_1">
                <div id="u12520_div" className=""></div>
              </div>
              <div id="u12521" className="ax_default ellipse">
                <img id="u12521_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/log_in/u12521.png?token=84cafe289d6b460e218b8335fef049aa"/>
                <div id="u12521_text" className="text ">
                    <p><span></span></p>
                </div>
              </div>
              <div id="u12522" className="ax_default heading_3">
                <div id="u12522_div" className=""></div>
                <div id="u12522_text" className="text ">
                    <p><span>Portal</span></p>
                    <p><span>feature</span></p>
                </div>
              </div>
          </div>
          <div className="forgot-passwrd">
              <div id="u3570" class="ax_default paragraph">
                <div id="u3570_div" class=""></div>
                <div id="u3570_text" class="text ">
                    <p><span>Forgot password</span></p>
                </div>
              </div>
              <div id="u3556" className="ax_default" data-label="Email" data-left="406" data-top="247" data-width="589" data-height="230">
                <div id="u3557" className="ax_default box_2">
                    <div id="u3557_div" className=""></div>
                </div>
                <div id="u3558" className="ax_default button_primary" data-label="btnAddToBasket cursor">
                    <div id="u3558_div" className="" tabindex="0"></div>
                    <div id="u3558_text" className="text ">
                      <p id="cache12"><span id="cache13">Send authentication code</span></p>
                    </div>
                </div>
                <div id="u3559" className="ax_default" data-label="Input field - Standard M" data-left="486" data-top="282" data-width="430" data-height="85">
                    <div id="u3560" className="ax_default box_1" data-label="Container - DELETE">
                      <img id="u3560_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/forgot_password/container_-_delete_u3535.png?token=9bc43ddaed445887cea170f5409782c8"/>
                    </div>
                    <div id="u3561" className="ax_default box_1" data-label="Border">
                      <div id="u3561_div" className=""></div>
                    </div>
                    <div id="u3562" className="ax_default text_field" data-label="Input">
                      <input id="u3562_input" type="text" value="" tabindex="0" />
                    </div>
                    <div id="u3563" className="ax_default label" data-label="Label">
                      <div id="u3563_div" className=""></div>
                      <div id="u3563_text" className="text ">
                          <p><span>Email address</span></p>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="Valid-autn">
              <div id="u3545" className="ax_default" data-label="Status" data-left="0" data-top="0" data-width="0" data-height="0">
                <div id="u3546" className="ax_default box_2">
                    <div id="u3546_div" className=""></div>
                </div>
              </div>
              <div id="u3547" className="ax_default nav_link">
                <div id="u3547_div" className=""></div>
                <div id="u3547_text" className="text ">
                    <p><span>Validate</span></p>
                </div>
              </div>
              <div id="u3548" className="ax_default button_primary" data-label="btnAddToBasket cursor">
                <div id="u3548_div" className="" tabindex="0"></div>
                <div id="u3548_text" className="text " >
                    <p id="cache14" ><span id="cache15">Reset password</span></p>
                </div>
              </div>
              <div id="u3549" className="ax_default" data-label="Input field - Standard M" data-left="0" data-top="0" data-width="0" data-height="0">
                <div id="u3550" className="ax_default box_1" data-label="Container - DELETE">
                    <img id="u3550_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/forgot_password/container_-_delete_u3535.png?token=9bc43ddaed445887cea170f5409782c8"/>
                </div>
                <div id="u3551" className="ax_default box_1" data-label="Border" >
                    <div id="u3551_div" className=""></div>
                </div>
                <div id="u3552" className="ax_default text_field" data-label="txtAuthCode">
                    <input id="u3552_input" type="text" value="" tabindex="0"/>
                </div>
                <div id="u3553" className="ax_default label" data-label="Label">
                    <div id="u3553_div" className=""></div>
                    <div id="u3553_text" className="text ">
                      <p><span>Authentication code</span></p>
                    </div>
                </div>
              </div>
              <div id="u3554" className="ax_default paragraph">
                <div id="u3554_div" className=""></div>
                <div id="u3554_text" className="text ">
                    <p><span>An authenication code has been sent your your email address, enter this underneath to reset your password.</span></p>
                </div>
              </div>
              <div id="u3555" className="ax_default primary_button" data-label="Default button cursor">
                <div id="u3555_div" className="" tabindex="0"></div>
                <div id="u3555_text" className="text ">
                    <p><span>Resend code</span></p>
                </div>
              </div>
          </div>
          <div className="passwrd-reset">
              <div id="u3546" className="ax_default box_2">
                <div id="u3546_div" className=""></div>
              </div>
              <div id="u3547" className="ax_default nav_link">
                <div id="u3547_div" className=""></div>
                <div id="u3547_text" className="text ">
                    <p><span>Set a new Password</span></p>
                </div>
              </div>
              <div id="u3540" className="ax_default box_1" data-label="Container - DELETE" >
                <img id="u3540_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/forgot_password/container_-_delete_u3535.png?token=9bc43ddaed445887cea170f5409782c8"/>
              </div>
              <div id="u3541" className="ax_default box_1" data-label="Border" >
                <div id="u3541_div" className=""></div>
              </div>
              <div id="u3542" className="ax_default text_field" data-label="txtNewPass">
                <input id="u3542_input" type="text" value="" tabindex="0"/ >
              </div>
              <div id="u3543" className="ax_default label" data-label="Label">
                <div id="u3543_div" className=""></div>
                <div id="u3543_text" className="text ">
                    <p><span>New password</span></p>
                </div>
              </div>
              <div id="u3536" className="ax_default box_1" data-label="Border" >
                <div id="u3536_div" className=""></div>
              </div>
              <div id="u3538" className="ax_default label" data-label="Label">
                <div id="u3538_div" className=""></div>
                <div id="u3538_text" className="text ">
                    <p><span>Confirm new password</span></p>
                </div>
              </div>
              <div id="u3533" className="ax_default button_primary" data-label="btnAddToBasket cursor">
                <div id="u3533_div" className="" tabindex="0"></div>
                <div id="u3533_text" className="text ">
                    <p id="cache20" ><span id="cache21">Set new password</span></p>
                </div>
              </div>
          </div>
          <div className="save-passwrd">
              <div id="u7203" className="ax_default box_2">
                <div id="u7203_div" className=""></div>
              </div>
              <div id="u7204" className="ax_default button_primary" data-label="btnAddToBasket cursor">
                <div id="u7204_div" className="" tabindex="0"></div>
                <div id="u7204_text" className="text ">
                    <p id="cache12"><span id="cache13" >Continue to sign in</span></p>
                </div>
              </div>
              <div id="u7205" className="ax_default line">
                <img id="u7205_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/forgot_password_reset_success/u7205.png?token=1e280782f6a8d63f9a4b289fc5c8fc85"/>
              </div>
              <div id="u7206" className="ax_default nav_link">
                <div id="u7206_div" className=""></div>
                <div id="u7206_text" className="text ">
                    <p><span>Your password has been reset</span></p>
                </div>
                <div id="u7207" className="ax_default icon">
                    <img id="u7207_img" className="img " src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/4HFO55/a5/20/b0/a520b0b07b7f4e29bb374e22684dae79/images/forgot_password_reset_success/u7207.png?token=f096c460d3ae6b49adcf7938bd556b1f"/>
                </div>
              </div>
          </div>
        </div>

      );
    }
}