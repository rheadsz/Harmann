print('if elif else - Exercise')
# Create a calculator which handles +,-,*,/ and outputs answer based on the mode/ operator used
# Hint: use 3 separate inputs 
# Bonus: Extend functionality with extra mode so it also does celsius to fahrenheit conversion
# formula is: temp in C*9/5 + 32 = temp in f
num1 = int(input('Enter num1: '))
num2 = int(input('Enter num2: '))
op = input('Enter operation: ')

if (op == '*'):
    print(num1 * num2)
elif (op == '/'):
    print(num1 / num2) 
elif (op == '%'):
    print(num1 % num2)
elif (op == '-'):
    print(num1 - num2)



