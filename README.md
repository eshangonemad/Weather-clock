Weather-Clock is an open source weather+clock Application that serves two main purposes

1. Allow users to see the date and time
2. See what the current weather is like

Unfortunately this Weather-Clock Application only works in the country of singapore as it makes use of the singapore government's free weather api

☁️⛅⛈️🌤️🌥️🌦️🌧️🌨️

<h1>Installation</h1>
Navigate to the script.js file of this project

go to this specific line

var  link  =  myObject['items'][0]['forecasts'][29]['forecast'];
Change the following

myObject['items'][0]['forecasts'][{change this based on your region}]['forecast'];
<h3>Regions & Corresponding numbers</h3>

```
 0: {name:  'Ang Mo Kio',  label_location:  {…}}
 1: {name:  'Bedok',  label_location:  {…}}
 2: {name:  'Bishan',  label_location:  {…}}
 3: {name:  'Boon Lay',  label_location:  {…}}
 4: {name:  'Bukit Batok',  label_location:  {…}}
 5: {name:  'Bukit Merah',  label_location:  {…}}
 6: {name:  'Bukit Panjang',  label_location:  {…}}
 7: {name:  'Bukit Timah',  label_location:  {…}}
 8: {name:  'Central Water Catchment',  label_location:  {…}}
 9: {name:  'Changi',  label_location:  {…}}
 10: {name:  'Choa Chu Kang',  label_location:  {…}}
 11: {name:  'Clementi',  label_location:  {…}}
 12: {name:  'City',  label_location:  {…}}
 13: {name:  'Geylang',  label_location:  {…}}
 14: {name:  'Hougang',  label_location:  {…}}
 15: {name:  'Jalan Bahar',  label_location:  {…}}
 16: {name:  'Jurong East',  label_location:  {…}}
 17: {name:  'Jurong Island',  label_location:  {…}}
 18: {name:  'Jurong West',  label_location:  {…}}
 19: {name:  'Kallang',  label_location:  {…}}
 20: {name:  'Lim Chu Kang',  label_location:  {…}}
 21: {name:  'Mandai',  label_location:  {…}}
 22: {name:  'Marine Parade',  label_location:  {…}}
 23: {name:  'Novena',  label_location:  {…}}
 24: {name:  'Pasir Ris',  label_location:  {…}}
 25: {name:  'Paya Lebar',  label_location:  {…}}
 26: {name:  'Pioneer',  label_location:  {…}}
 27: {name:  'Pulau Tekong',  label_location:  {…}}
 28: {name:  'Pulau Ubin',  label_location:  {…}}
 29: {name:  'Punggol',  label_location:  {…}}
 30: {name:  'Queenstown',  label_location:  {…}}
 31: {name:  'Seletar',  label_location:  {…}}
 32: {name:  'Sembawang',  label_location:  {…}}
 33: {name:  'Sengkang',  label_location:  {…}}
 34: {name:  'Sentosa',  label_location:  {…}}
 35: {name:  'Serangoon',  label_location:  {…}}
 36: {name:  'Southern Islands',  label_location:  {…}}
 37: {name:  'Sungei Kadut',  label_location:  {…}}
 38: {name:  'Tampines',  label_location:  {…}}
 39: {name:  'Tanglin',  label_location:  {…}}
 40: {name:  'Tengah',  label_location:  {…}}
 41: {name:  'Toa Payoh',  label_location:  {…}}
 42: {name:  'Tuas',  label_location:  {…}}
 43: {name:  'Western Islands',  label_location:  {…}}
 45.  44: {name:  'Western Water Catchment',  label_location:  {…}}
 46.  45: {name:  'Woodlands',  label_location:  {…}}
 47.  46: {name:  'Yishun',  label_location:  {…}}
```
Just input your region and host it on a static web hosting server as it is completely client side
