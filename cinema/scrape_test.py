__author__ = 'geoffreyboss'

import requests
from bs4 import BeautifulSoup

key = ('title')
url = "http://www.imdb.com"

html = requests.get(
    'http://www.imdb.com/chart/top').text
bs = BeautifulSoup(html)
possible_links = bs.find_all('a')
title = bs.find_all('td')

for link in possible_links:
    if link.has_attr('href') and link.has_attr('title'):
        links = link.attrs['href']
        print url + links