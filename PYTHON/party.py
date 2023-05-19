names = ['john ClEEse','Eric IDLE','michael']
names1 = ['graHam chapman', 'TERRY', 'terry jones']
ip1 = input('Enter name1: ')
names.append(ip1)
ip2 = input('Enter name2: ')
names1.append(ip2)
msg = "You are invited to the party"
for name in names:
    print(f'{name.title()} {msg}')
for name1 in names1:
    print(f'{name1.title()} {msg}')
    

