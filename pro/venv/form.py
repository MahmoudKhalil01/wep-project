from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField,SubmitField,BooleanField
from wtforms.validators import DataRequired, Length, Email,regexp,equal_to

class Requirement(FlaskForm):
    fname = StringField("First Name", validators=[DataRequired(), Length(min=2, max=24)])
    lname = StringField("Last Name", validators=[DataRequired(), Length(min=2, max=24)])
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired(), Length(min=8),regexp("^[A-Za-z][A-Za-z0-9]*$")])
    conform_password=PasswordField("conform password",validators=[DataRequired(),equal_to("password")])
    submit=SubmitField("sign in")


class loginForm(FlaskForm): 
        email = StringField("Email", validators=[DataRequired(), Email()])
        password = PasswordField("Password", validators=[DataRequired()])
        submit=SubmitField("sign up")
        remember=BooleanField("remeber me")