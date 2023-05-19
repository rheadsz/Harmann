num = 12
guessed_num = 13
chance = 0
limit = 3

while chance < limit:
    if guessed_num == num:
        print(f'You win!! The number was {guessed_num}')
        break
    else:
        print(f'The number is not {guessed_num}. Try again')
        if guessed_num > 12:
            print(f'The number you selected was too high')
        else:
             print(f'The number you selected was too low')
        chance += 1

if guessed_num != num:
    print(f'You lose! The number was {num}')