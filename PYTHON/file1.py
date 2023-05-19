name = input("Name: ")
dist = int(input("Enter dist(KM): "))
dist_in_miles = (1 * dist)/1.609
print("Hello "+name.capitalize()+". The km value is "+str(dist)+" and the distance in miles is: "+str(dist_in_miles))