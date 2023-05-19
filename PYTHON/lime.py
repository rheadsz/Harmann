sales_w1 = [7,3,42,19,15,35,9]
sales_w2 = [12,4,26,10,7,28]
sales = []
new_num = int(input('sales w2: '))
sales_w2.append(new_num)
sales_w1.extend(sales_w2)
sales.extend(sales_w1)
print(sales)
print(max(sales)*1.5)
print(min(sales)*1.5)
print(sum((max(sales)*1.5,min(sales)*1.5)))