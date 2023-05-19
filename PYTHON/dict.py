dict1 = {"apple": 2,"tea": 5, "orange": 7}
dict2 = {"apple": 2,"tea": 5, "orange": 7}
tot_items = []
item1 = input("Enter item from store 1: ")
item2 = input("Enter item from store 2: ")
for key,value in dict1.items():
    if key == item1:
        if value == 0:
            print("Sorry, we are out of ",key)
        else:
            tot_items.append(item1)
            value -= 1
for key,value in dict2.items():
    if key == item2:
        if value == 0:
            print("Sorry, we are out of this item")
        else:
            tot_items.append(item2)
            value -= 1   
print(tot_items)