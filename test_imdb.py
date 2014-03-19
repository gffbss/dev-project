__author__ = 'geoffreyboss'

# from imdb import IMDb
#
# ia = IMDb()
# matrix = ia.get_movie('0075860')
# print matrix
#
#
#
# def median(alist):
#
#     srtd = sorted(alist) # returns a sorted copy
#     mid = len(alist)/2   # remember that integer division truncates
#
#     if len(alist) % 2 == 0:  # take the avg of middle two
#         print (srtd[mid-1] + srtd[mid]) / 2.0
#     else:
#         print srtd[mid]
#
# median([1,2,3,4,5])

def check_for_mode(num_list):
    num_counter = 0
    for num in num_list:
        if num == num_list[num]:
            num_counter += 1
            print num_counter, num

check_for_mode([1,4,2,4,3,5])