

exports.seed = function(knex, Promise) {

  // Deletes ALL existing entries
return knex.raw('TRUNCATE planet RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('planet').insert([

        {
          name: 'Mercury',
          fact: ' The Swiftest Planet',
          description: 'The closest planet to the sun, Mercury is only a bit larger than Earth\'s moon. Its day side is scorched by the sun and can reach 840 degrees Fahrenheit (450 Celsius), but on the night side, temperatures drop to hundreds of degrees below freezing. Mercury has virtually no atmosphere to absorb meteor impacts, so its surface is pockmarked with craters, just like the moon.',
          gravity: 0.378
        },

        {
          name: 'Venus',
          fact: 'Planetary Hot Spot',
          description: 'The second planet from the sun, Venus is terribly hot, even hotter than Mercury. The atmosphere is toxic. The pressure at the surface would crush and kill you. Scientists describe Venus\’ situation as a runaway greenhouse effect. Its size and structure are similar to Earth, Venus\' thick, toxic atmosphere traps heat in a runaway "greenhouse effect." Oddly, Venus spins slowly in the opposite direction of most planets.',
          gravity: 0.907
        },

        {
          name: 'Earth',
          fact: 'Our Home Planet',
          description: 'The third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It\’s the only world known to harbor life. Earth\’s atmosphere is rich in life-sustaining nitrogen and oxygen. Earth\'s surface rotates about its axis at 1,532 feet per second (467 meters per second) — slightly more than 1,000 mph (1,600 kph) — at the equator. The planet zips around the sun at more than 18 miles per second (29 km per second).',
          gravity: 1
        },

        {
          name: 'Mars',
          fact: 'The Red Planet',
          description: 'The fourth planet from the sun, is a cold, dusty place. The dust, an iron oxide, gives the planet its reddish cast. Mars shares similarities with Earth: It is rocky, has mountains and valleys, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms. It snows on Mars. And Mars harbors water ice. Scientists think it was once wet and warm, though today it’s cold and desert-like.',
          gravity: 0.377
        },

        {
          name: 'Jupiter',
          fact: 'King of the Planets',
          description: 'The fifth planet from the sun, Jupiter is huge and is the most massive planet in our solar system. It’s a mostly gaseous world, mostly hydrogen and helium. Its swirling clouds are colorful due to different types of trace gases. A big feature is the Great Red Spot, a giant storm which has raged for hundreds of years. Jupiter has a strong magnetic field, and with dozens of moons, it looks a bit like a miniature solar system.',
          gravity: 2.36
        },

        {
          name: 'Saturn',
          fact: 'Jewel of Our Solar System',
          description: 'The sixth planet from the sun is known most for its rings. When Galileo Galilei first studied Saturn in the early 1600s, he thought it was an object with three parts. Not knowing he was seeing a planet with rings, the stumped astronomer entered a small drawing — a symbol with one large circle and two smaller ones — in his notebook, as a noun in a sentence describing his discovery. More than 40 years later, Christiaan Huygens proposed that they were rings. The rings are made of ice and rock. Scientists are not yet sure how they formed. The gaseous planet is mostly hydrogen and helium. It has numerous moons.',
          gravity: 0.916
        },

        {
          name: 'Uranus',
          fact: 'The Sideways Planet',
          description: 'The seventh planet from the sun, Uranus is an oddball. It’s the only giant planet whose equator is nearly at right angles to its orbit — it basically orbits on its side. Astronomers think the planet collided with some other planet-size object long ago, causing the tilt. The tilt causes extreme seasons that last 20-plus years, and the sun beats down on one pole or the other for 84 Earth-years. Uranus is about the same size as Neptune. Methane in the atmosphere gives Uranus its blue-green tint. It has numerous moons and faint rings.',
          gravity: 0.889
        },

        {
          name: 'Neptune',
          fact: 'The Windiest Planet',
          description: 'The eighth planet from the sun, Neptune is known for strong winds — sometimes faster than the speed of sound. Neptune is far out and cold. The planet is more than 30 times as far from the sun as Earth. It has a rocky core. Neptune was the first planet to be predicted to exist by using math, before it was detected. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest some other might be exerting a gravitational tug. German astronomer Johann Galle used calculations to help find Neptune in a telescope. Neptune is about 17 times as massive as Earth.',
          gravity: 1.12
        },

        {
          name: 'Pluto',
          fact: 'King of the Kuiper Belt',
          description: 'Once the ninth planet from the sun, Pluto is unlike other planets in many respects. It is smaller than Earth\'s moon. Its orbit carries it inside the orbit of Neptune and then way out beyond that orbit. From 1979 until early 1999, Pluto had actually been the eighth planet from the sun. Then, on Feb. 11, 1999, it crossed Neptune\'s path and once again became the solar system\'s most distant planet — until it was demoted to dwarf planet status.',
          gravity: 0.071
        }


      ]);
    });
};
