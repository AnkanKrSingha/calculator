print ("Hare Krishna")


import time

def display_time():
  while True:
    current_time = time.strftime('%H:%M:%S')
    print(current_time)
    time.sleep(1)

if __name__ == '__main__':
  display_time()