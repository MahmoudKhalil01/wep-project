from flask import Flask, render_template, url_for, redirect, flash , request , redirect, url_for,jsonify 
from form import Requirement, loginForm 


app = Flask(__name__, template_folder="templates")

class Item:
    def __init__(self, name, id, price, image):
        # __init__ constractor
        self.name = name
        self.id = id
        self.price = price
        self.image = image


app.config["SECRET_KEY"] = "958e03f90dc2b619c2cb6aed1c5467ef7b7ead3623c08fed17c14305767e2bf"


@app.route('/signup', methods=['GET', 'POST'])              #signup
def register():
    form = Requirement()
    if form.validate_on_submit():
        flash(f"Account successfully created for {form.fname.data}!", "success")
        return redirect(url_for('page1'))
    return render_template("signup.html", form=form)

@app.route("/submit_payment", methods=["POST"])
def submit_payment():
    email = request.form.get("email")
    card_number = request.form.get("card_number")
    expiry_date = request.form.get("expiry_date")
    cvc = request.form.get("cvc")
    # Add payment processing logic here
    return f"Payment submitted for {email}"


class Item:
    def __init__(self, name, id, price, image):
        self.name = name
        self.id = id
        self.price = price
        self.image = image

item_list_shoes = [
    Item("Dress Shoes", 1, 500, "women.jpeg"),
    Item("Casual Sneakers", 2, 400, "men.jpeg"),
    Item("Formal Oxfords", 3, 600, "1.jpeg"),
    Item("Leather Loafers", 4, 200, "2.jpeg"),
    Item("Hiking Boots", 5, 500, "3.jpeg"),
    Item("Slip-On Sandals", 6, 750, "4.jpeg"),
    Item("Basketball Shoes", 7, 1000, "5.jpeg"),
    Item("High-Top Sneakers", 8, 800, "6.jpeg"),
    Item("Trail Running Shoes", 9, 900, "7.jpeg"),
    Item("Canvas Sneakers", 10, 400, "8.jpeg"),
    Item("Flip Flops", 11, 100, "9.jpeg"),
    Item("Dress Shoes", 12, 450, "10.jpeg"),
    Item("Espadrilles", 13, 680, "11.jpeg"),
    Item("Skateboarding Shoes", 14, 540, "12.jpeg"),
    Item("Climbing Shoes", 15, 580, "13.jpeg"),
    Item("Work Boots", 16, 850, "14.jpeg"),
    Item("Chukka Boots", 17, 650, "15.jpeg"),
    Item("Chelsea Boots", 18, 350, "16.jpeg")]

item_list_food = [
    Item("Pizza", 1, 500, "17.jpeg"),
    Item("Burger", 2, 400, "11.jpeg"),
    Item("Pasta", 3, 600, "1.jpg"),
    Item("Steak", 4, 200, "2.jpeg"),
    Item("Pancakes", 5, 500, "3.jpeg"),
    Item("Hot Dog", 6, 750, "4.jpeg"),
    Item("Sandwich", 7, 1000, "5.jpeg"),
    Item("Fries", 8, 800, "6.jpeg"),
    Item("Burger", 9, 900, "7.jpeg"),
    Item("Pancakes", 10, 400, "8.jpeg"),
    Item("Burger", 11, 100, "9.jpeg"),
    Item("Pasta", 12, 450, "10.jpeg"),
    Item("Sandwich", 13, 680, "11.jpeg"),
    Item("Hot Dog", 14, 540, "12.jpeg"),
    Item("Sandwich", 15, 580, "13.jpeg"),
    Item("Pizza", 16, 850, "14.jpeg"),
    Item("chicken", 17, 650, "15.jpeg"),
    Item("Pizza", 18, 350, "16.jpeg")]

item_list_elec= [
    Item("dell insparon 15", 1, 5000, "17.jpeg"),
    Item("lenevo", 2, 4000, "18.jpeg"),
    Item("HP", 3, 6000, "1.jpeg"),
    Item("dell 15", 4, 20000, "2.jpeg"),
    Item("mac 10", 5, 50000, "3.jpeg"),
    Item("lenevo", 6, 7050, "4.jpeg"),
    Item("dell 12", 7, 10000, "5.jpeg"),
    Item("mac", 8, 8000, "6.jpeg"),
    Item("hp 15", 9, 9000, "7.jpeg"),
    Item("lenevo", 10, 40000, "8.jpeg"),
    Item("mac", 11, 10000, "9.jpeg"),
    Item("mac", 12, 45000, "10.jpeg"),
    Item("dell", 13, 68000, "11.jpeg"),
    Item("mac 15", 14, 54000, "12.jpeg"),
    Item("dell", 15, 58000, "13.jpeg"),
    Item("minilap", 16, 85000, "14.jpeg"),
    Item("old mak", 17, 65000, "15.jpeg"),
    Item("mini lab", 18, 35000, "16.jpeg")]

@app.route('/')
def page1():
    return render_template('page1.html')

@app.route('/page2')
def page2():
    return render_template('page2.html')

@app.route('/page3')
def page3():
    return render_template('page3.html' , products=item_list_shoes)

@app.route('/page4')
def page4():
    return render_template('page4.html',products=item_list_food)

@app.route('/page5')
def page5():
    return render_template('page5.html',products=item_list_elec)

@app.route('/page6')
def page6():
    return render_template('page6.html')

@app.route('/page7')
def page7():
    return render_template('page7.html')

@app.route('/page8')
def page8():
    return render_template('page8.html')

@app.route('/page9')
def page9():
    return render_template('page9.html')

@app.route('/payment')                        #payment
def payment():
    return render_template('payment.html')

if __name__ == '__main__':
    app.run(debug=True)