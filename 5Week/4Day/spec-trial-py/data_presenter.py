import csv

with open('CupcakeInvoices.csv', 'r') as f:
    read = csv.reader(f)

    print('Loop through all the data and print each row.')
    for data in read:
        print(f'row: ${data}, cupcake: ${data[2]}, total: ${float(data[3]) * float(data[4])}')


