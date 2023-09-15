import "./styles.css";

const myjson = [
  {
    Car: {
      Color: "Rose red",
      "Tinted windows": false,
      "Wheels": 4,
      "Roof cargo": "null",
      "Entertainment": ["FM Radio MP3", "MP4 and MKV player", "harman/kardon speakers"],
      "Accessories": ["satnav", "cruise control"]
    },

    Car2: {
      Color: "Navy blue",
      "Tinted windows": true,
      "Wheels": 4,
      "Roof cargo": "Thule",
      "Entertainment": ["FM Radio", "Apple CarPlay/Android Auto", "Bowers & Wilkins Premium Sound speakers"],
      "Accessories": ["self drive system", "luggage cover"]
    }
  }
];

document.getElementById("app").innerHTML = `
<div id="app">
<h1>Car Properties</h1>
<table border="1">
    <th>
        <tr>
            <th>Property</th>
            <th>Car 1</th>
            <th>Car 2</th>
        </tr>
    </th>
    <tbody>
        <tr>
            <td>Color</td>
            <td>${myjson[0].Car.Color}</td>
            <td>${myjson[0].Car2.Color}</td>
        </tr>
        <tr>
            <td>Tinted windows</td>
            <td>${myjson[0].Car["Tinted windows"]}</td>
            <td>${myjson[0].Car2["Tinted windows"]}</td>
        </tr>
        <tr>
            <td>Wheels</td>
            <td>${myjson[0].Car.Wheels}</td>
            <td>${myjson[0].Car2.Wheels}</td>
        </tr>
        <tr>
            <td>Roof cargo</td>
            <td>${myjson[0].Car["Roof cargo"] || 'N/A'}</td>
            <td>${myjson[0].Car2["Roof cargo"] || 'N/A'}</td>
        </tr>
        <tr>
            <td>Entertainment</td>
            <td>${myjson[0].Car.Entertainment.join(', ')}</td>
            <td>${myjson[0].Car2.Entertainment.join(', ')}</td>
        </tr>
        <tr>
            <td>Accessories</td>
            <td>${myjson[0].Car.Accessories.join(', ')}</td>
            <td>${myjson[0].Car2.Accessories.join(', ')}</td>
        </tr>
    </tbody>
</table>
</div>


`;
