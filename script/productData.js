const productData = [
    {
    name: 'Gibson 2020 Les Paul Modern Solid Body',
    type: 'Guitar',
    style: 'Electric',
    price: 2379.99,
    quantity: 3,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    },
    {
    name: 'Gibson SG Standard Solid Body',
    type: 'Guitar',
    style: 'Electric',
    price: 1299.99,
    quantity: 2,
    description:
      "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    },
    {
    name: 'Gibson Les Paul Standard Solid Body',
    type: 'Guitar',
    style: 'Electric',
    price: 2079.99,
    quantity: 5,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    },
    {
    name: 'Gibson Les Paul Traditional Pro V Solid Body',
    type: 'Guitar',
    style: 'Electric',
    price: 1699.99,
    quantity: 1,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    },
    {
    name: 'Gibson Firebird Solid Body',
    type: 'Guitar',
    style: 'Electric',
    price: 1389.99,
    quantity: 6,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    },
    {
    name: 'Gibson 2018 Les Paul Modern Solid Body',
    type: 'Guitar',
    style: 'Electric',
    price: 2179.99,
    quantity: 3,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    },
    {
    name: 'Gibson SG Standard',
    type: 'Guitar',
    style: 'Electric',
    price: 1599.99,
    quantity: 3,
    description:
      "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    },
    {
    name: 'Gibson Les Paul Standard',
    type: 'Guitar',
    style: 'Electric',
    price: 2579.99,
    quantity: 5,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    },
    {
    name: 'Gibson Les Paul Traditional Pro ',
    type: 'Guitar',
    style: 'Electric',
    price: 1499.99,
    quantity: 1,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    },
    {
    name: 'Gibson Firebird',
    type: 'Guitar',
    style: 'Electric',
    price: 1889.99,
    quantity: 6,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    },
    {
    name: 'Gibson 2019 Les Paul Modern Solid Body',
    type: 'Guitar',
    style: 'Electric',
    price: 2279.99,
    quantity: 3,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    },
    {
    name: 'Gibson SG',
    type: 'Guitar',
    style: 'Electric',
    price: 1099.99,
    quantity: 2,
    description:
      "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    },
    {
    name: 'Gibson Les Paul Studio',
    type: 'Guitar',
    style: 'Electric',
    price: 2179.99,
    quantity: 5,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    },
    {
    name: 'Gibson Les Paul Traditional Pro V Solid',
    type: 'Guitar',
    style: 'Electric',
    price: 1699.99,
    quantity: 1,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    },
    {
    name: 'Gibson Firebird Solid Body 2',
    type: 'Guitar',
    style: 'Electric',
    price: 1389.99,
    quantity: 6,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    },
    {
    name: 'Gibson 2018 Les Paul Modern',
    type: 'Guitar',
    style: 'Electric',
    price: 2179.99,
    quantity: 3,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    },
    {
    name: 'Gibson 2010 SG Standard',
    type: 'Guitar',
    style: 'Electric',
    price: 1599.99,
    quantity: 3,
    description:
      "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    },
    {
    name: 'Gibson Les Paul Standard Pro',
    type: 'Guitar',
    style: 'Electric',
    price: 2579.99,
    quantity: 5,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    },
    {
    name: 'Gibson Les Paul Traditional',
    type: 'Guitar',
    style: 'Electric',
    price: 1499.99,
    quantity: 1,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    },
    {
    name: 'Gibson 2004 Firebird',
    type: 'Guitar',
    style: 'Electric',
    price: 1889.99,
    quantity: 6,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    },
    {
    name: 'Gibson J-45 Standard Vintage Sunburst',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG1.jpeg',
    },
    {
    name: 'Gibson G45 Studio',
    type: 'Guitar',
    style: 'Acoustic',
    price: 889.99,
    quantity: 1,
    description:
      'Sitka spruce top yields a direct, punchy sound with incomparable dynamic range. Walnut back and sides deliver a gorgeous balance of dark warmth and bright, bell-like ring. Easy-playing advanced-response utile neck with striped ebony fingerboard.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson Hummingbird Original',
    type: 'Guitar',
    style: 'Acoustic',
    price: 3199.2,
    quantity: 4,
    description:
      'The Hummingbird\'s mahogany neck has a comfortable rounded profile and mother of pearl parallelogram inlays.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson 50s J-45 Original',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 1,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson J-45 Studio Walnut',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2299,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson J-45 Standard Vintage',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG1.jpeg',
    },
    {
    name: 'Gibson G45',
    type: 'Guitar',
    style: 'Acoustic',
    price: 889.99,
    quantity: 1,
    description:
      'Sitka spruce top yields a direct, punchy sound with incomparable dynamic range. Walnut back and sides deliver a gorgeous balance of dark warmth and bright, bell-like ring. Easy-playing advanced-response utile neck with striped ebony fingerboard.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson Hummingbird',
    type: 'Guitar',
    style: 'Acoustic',
    price: 3199.2,
    quantity: 4,
    description:
      'The Hummingbird\'s mahogany neck has a comfortable rounded profile and mother of pearl parallelogram inlays.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson 50s J-45',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 1,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson J-45 Studio',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2299,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson J-45 Standard',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG1.jpeg',
    },
    {
    name: 'Gibson G45B',
    type: 'Guitar',
    style: 'Acoustic',
    price: 889.99,
    quantity: 1,
    description:
      'Sitka spruce top yields a direct, punchy sound with incomparable dynamic range. Walnut back and sides deliver a gorgeous balance of dark warmth and bright, bell-like ring. Easy-playing advanced-response utile neck with striped ebony fingerboard.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson Hummingbird A',
    type: 'Guitar',
    style: 'Acoustic',
    price: 3199.2,
    quantity: 4,
    description:
      'The Hummingbird\'s mahogany neck has a comfortable rounded profile and mother of pearl parallelogram inlays.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson J-45',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 1,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson J-45 Studio A',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2299,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Rogue RM-100A A-Style',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 399.99,
    quantity: 2,
    description:
      'Sporting a gorgeous finish, the Rogue RM-100A is a well-built, traditional A-model mandolin. It features clean workmanship throughout and projects a bright tone with lots of bark. With an easy-to-play neck and adjustable bridge, the RM-100A is perfect for beginners who wish to play bluegrass or any other style of music. Finishing touches include chrome tuners and nickel-plated frets.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'The Loar LM-310F Hand-Carved F-Style',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 149.99,
    quantity: 2,
    description:
      'Authentic mandolin "chop" is recognizable from the first strum, and can only be found in an instrument with a true, hand-carved spruce top. The Loar hand-carved the tops of the LM-310F to provide that real 1920\'s sound, but with enough vibration to still cut through in today\'s ensemble playing.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN2.jpeg',
    },
    {
    name: 'Recording King RAM-3 Dirty 30s A-Style',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 1069,
    quantity: 3,
    description:
      'The Dirty 30s Mandolin is the perfect instrument for troubadours, songwriters or multi-instrumentalists who want a mandolin that delivers classic old-time sound without the price tag of a vintage instrument. The Dirty 30s Mandolin is a traditional A-style with vintage appointments.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN3.jpeg',
    },
    {
    name: 'Washburn M3SW Americana F-Style Sunburst',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 219.99,
    quantity: 2,
    description:
      'This F Style all sold wood instrument features a solid carved European spruce top, and solid carved Canadian maple back and sides and is perfect for bluegrass and Americana styles of music.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'Ibanez M510E A-STYLE',
    type: 'Mandolin',
    style: 'Electric',
    price: 219.99,
    quantity: 4,
    description:
      'The M510E from Ibanez is an A-style acoustic/electric mandolin made with a spruce top, mahogany back and sides, a mahogany neck with a rosewood fingerboard, bridge, and saddle, as well as chrome tuners. It is painted in a dark violin sunburst gloss finish and comes set up with bronze strings.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN5.jpeg',
    },
    {
    name: 'Rogue RM-100A',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 399.99,
    quantity: 2,
    description:
      'Sporting a gorgeous finish, the Rogue RM-100A is a well-built, traditional A-model mandolin. It features clean workmanship throughout and projects a bright tone with lots of bark. With an easy-to-play neck and adjustable bridge, the RM-100A is perfect for beginners who wish to play bluegrass or any other style of music. Finishing touches include chrome tuners and nickel-plated frets.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'The Loar LM-310F Hand-Carved',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 149.99,
    quantity: 2,
    description:
      'Authentic mandolin "chop" is recognizable from the first strum, and can only be found in an instrument with a true, hand-carved spruce top. The Loar hand-carved the tops of the LM-310F to provide that real 1920\'s sound, but with enough vibration to still cut through in today\'s ensemble playing.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN2.jpeg',
    },
    {
    name: 'Recording King RAM-3 Dirty 30s',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 1069,
    quantity: 3,
    description:
      'The Dirty 30s Mandolin is the perfect instrument for troubadours, songwriters or multi-instrumentalists who want a mandolin that delivers classic old-time sound without the price tag of a vintage instrument. The Dirty 30s Mandolin is a traditional A-style with vintage appointments.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN3.jpeg',
    },
    {
    name: 'Washburn M3SW Americana F-Style',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 219.99,
    quantity: 2,
    description:
      'This F Style all sold wood instrument features a solid carved European spruce top, and solid carved Canadian maple back and sides and is perfect for bluegrass and Americana styles of music.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'Ibanez M510E',
    type: 'Mandolin',
    style: 'Electric',
    price: 219.99,
    quantity: 4,
    description:
      'The M510E from Ibanez is an A-style acoustic/electric mandolin made with a spruce top, mahogany back and sides, a mahogany neck with a rosewood fingerboard, bridge, and saddle, as well as chrome tuners. It is painted in a dark violin sunburst gloss finish and comes set up with bronze strings.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN5.jpeg',
    },
    {
    name: 'Rogue RM-100',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 399.99,
    quantity: 2,
    description:
      'Sporting a gorgeous finish, the Rogue RM-100A is a well-built, traditional A-model mandolin. It features clean workmanship throughout and projects a bright tone with lots of bark. With an easy-to-play neck and adjustable bridge, the RM-100A is perfect for beginners who wish to play bluegrass or any other style of music. Finishing touches include chrome tuners and nickel-plated frets.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'The Loar LM-310F',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 149.99,
    quantity: 2,
    description:
      'Authentic mandolin "chop" is recognizable from the first strum, and can only be found in an instrument with a true, hand-carved spruce top. The Loar hand-carved the tops of the LM-310F to provide that real 1920\'s sound, but with enough vibration to still cut through in today\'s ensemble playing.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN2.jpeg',
    },
    {
    name: 'Recording King RAM-3',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 1069,
    quantity: 3,
    description:
      'The Dirty 30s Mandolin is the perfect instrument for troubadours, songwriters or multi-instrumentalists who want a mandolin that delivers classic old-time sound without the price tag of a vintage instrument. The Dirty 30s Mandolin is a traditional A-style with vintage appointments.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN3.jpeg',
    },
    {
    name: 'Washburn M3SW Americana',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 219.99,
    quantity: 2,
    description:
      'This F Style all sold wood instrument features a solid carved European spruce top, and solid carved Canadian maple back and sides and is perfect for bluegrass and Americana styles of music.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'Ibanez M510',
    type: 'Mandolin',
    style: 'Electric',
    price: 219.99,
    quantity: 4,
    description:
      'The M510E from Ibanez is an A-style acoustic/electric mandolin made with a spruce top, mahogany back and sides, a mahogany neck with a rosewood fingerboard, bridge, and saddle, as well as chrome tuners. It is painted in a dark violin sunburst gloss finish and comes set up with bronze strings.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN5.jpeg',
    },
    {
    name: 'Fender Player Jazz Plus Top Limited-Edition Blue Burst',
    type: 'Bass',
    style: 'Electric',
    price: 779.99,
    quantity: 3,
    description:
      'This limited-edition Player Jazz Bass Plus Top in Blue Burst delivers everything a bass player expects from a traditional Jazz Bass, but adds a stunning flame maple veneer. Loaded with Player Jazz Bass pickups, this bass is powerful and articulate with well-balanced tone for any number of playing styles. The Blue Burst finish over flame maple makes this bass as stunning visually as it is sonically.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS1.jpeg',
    },
    {
    name: 'Sterling by Music Man StingRay Ray4 Maple Fingerboard Black',
    type: 'Bass',
    style: 'Electric',
    price: 349.99,
    quantity: 4,
    description:
      'The StingRay Ray4 Maple Fingerboard electric bass is the cousin of the Music Man StingRay 4 bass. Classic, iconic instruments that defined a generation of bassists since the late \'70s. Active electronics, low-noise humbucking pickup, rock-solid hardware and a simple, uncluttered look that is instantly recognizable and respected.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS2.jpeg',
    },
    {
    name: 'Fender Player Precision Maple Fingerboard Buttercream',
    type: 'Bass',
    style: 'Electric',
    price: 849.99,
    quantity: 2,
    description:
      'The “Modern C”-shaped maple neck\'s hosts a 9.5”-radius fingerboard with 20 medium-jumbo frets that are ideal for almost any playing style, while the 4-saddle bridge is engineered for accurate intonation and easy action adjustment so you can personalize the feel to your playing style and taste.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS3.jpeg',
    },
    {
    name: 'Sire Marcus Miller V10 Swamp Ash 5-StringSire Marcus Miller V10 Swamp Ash 5-String',
    type: 'Bass',
    style: 'Electric',
    price: 1499,
    quantity: 3,
    description:
      'Resonant ash body and solid maple top with flamed maple veneer for punchy, pristine, and powerful bass tone. Roasted flamed maple neck and fingerboard for impeccably smooth playability and comfortable response up and down the neck.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS4.jpeg',
    },
    {
    name: 'Ibanez AEB5E Acoustic-Electric Black',
    type: 'Bass',
    style: 'Acoustic',
    price: 269.99,
    quantity: 6,
    description:
      'The Ibanez AEB5E acoustic-electric bass delivers a punchy low end, whether amplified or not. As an unplugged acoustic bass, its agathis body and sides give it a warm tone.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS5.jpeg',
    },
    {
    name: 'Fender Player Jazz Plus Top Limited-Edition Blue',
    type: 'Bass',
    style: 'Electric',
    price: 779.99,
    quantity: 2,
    description:
      'This limited-edition Player Jazz Bass Plus Top in Blue Burst delivers everything a bass player expects from a traditional Jazz Bass, but adds a stunning flame maple veneer. Loaded with Player Jazz Bass pickups, this bass is powerful and articulate with well-balanced tone for any number of playing styles. The Blue Burst finish over flame maple makes this bass as stunning visually as it is sonically.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS1.jpeg',
    },
    {
    name: 'Sterling by Music Man StingRay Ray4',
    type: 'Bass',
    style: 'Electric',
    price: 349.99,
    quantity: 4,
    description:
      'The StingRay Ray4 Maple Fingerboard electric bass is the cousin of the Music Man StingRay 4 bass. Classic, iconic instruments that defined a generation of bassists since the late \'70s. Active electronics, low-noise humbucking pickup, rock-solid hardware and a simple, uncluttered look that is instantly recognizable and respected.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS2.jpeg',
    },
    {
    name: 'Fender Player Precision Maple Fingerboard',
    type: 'Bass',
    style: 'Electric',
    price: 849.99,
    quantity: 2,
    description:
      'The “Modern C”-shaped maple neck\'s hosts a 9.5”-radius fingerboard with 20 medium-jumbo frets that are ideal for almost any playing style, while the 4-saddle bridge is engineered for accurate intonation and easy action adjustment so you can personalize the feel to your playing style and taste.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS3.jpeg',
    },
    {
    name: 'Sire Marcus Miller V10 Swamp Ash 5-StringSire Marcus Miller V10 Swamp Ash',
    type: 'Bass',
    style: 'Electric',
    price: 1499,
    quantity: 3,
    description:
      'Resonant ash body and solid maple top with flamed maple veneer for punchy, pristine, and powerful bass tone. Roasted flamed maple neck and fingerboard for impeccably smooth playability and comfortable response up and down the neck.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS4.jpeg',
    },
    {
    name: 'Ibanez AEB5E Acoustic-Electric',
    type: 'Bass',
    style: 'Acoustic',
    price: 269.99,
    quantity: 6,
    description:
      'The Ibanez AEB5E acoustic-electric bass delivers a punchy low end, whether amplified or not. As an unplugged acoustic bass, its agathis body and sides give it a warm tone.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS5.jpeg',
    },
    {
    name: 'Fender Player Jazz Plus Top Limited-Edition',
    type: 'Bass',
    style: 'Electric',
    price: 779.99,
    quantity: 2,
    description:
      'This limited-edition Player Jazz Bass Plus Top in Blue Burst delivers everything a bass player expects from a traditional Jazz Bass, but adds a stunning flame maple veneer. Loaded with Player Jazz Bass pickups, this bass is powerful and articulate with well-balanced tone for any number of playing styles. The Blue Burst finish over flame maple makes this bass as stunning visually as it is sonically.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS1.jpeg',
    },
    {
    name: 'Sterling by Music Man',
    type: 'Bass',
    style: 'Electric',
    price: 349.99,
    quantity: 4,
    description:
      'The StingRay Ray4 Maple Fingerboard electric bass is the cousin of the Music Man StingRay 4 bass. Classic, iconic instruments that defined a generation of bassists since the late \'70s. Active electronics, low-noise humbucking pickup, rock-solid hardware and a simple, uncluttered look that is instantly recognizable and respected.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS2.jpeg',
    },
    {
    name: 'Fender Player Precision',
    type: 'Bass',
    style: 'Electric',
    price: 849.99,
    quantity: 2,
    description:
      'The “Modern C”-shaped maple neck\'s hosts a 9.5”-radius fingerboard with 20 medium-jumbo frets that are ideal for almost any playing style, while the 4-saddle bridge is engineered for accurate intonation and easy action adjustment so you can personalize the feel to your playing style and taste.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS3.jpeg',
    },
    {
    name: 'Sire Marcus Miller V10 Swamp Ash 5-StringSire Marcus Miller V10',
    type: 'Bass',
    style: 'Electric',
    price: 1499,
    quantity: 3,
    description:
      'Resonant ash body and solid maple top with flamed maple veneer for punchy, pristine, and powerful bass tone. Roasted flamed maple neck and fingerboard for impeccably smooth playability and comfortable response up and down the neck.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS4.jpeg',
    },
    {
    name: 'Ibanez AEB5E Acoustic',
    type: 'Bass',
    style: 'Acoustic',
    price: 269.99,
    quantity: 6,
    description:
      'The Ibanez AEB5E acoustic-electric bass delivers a punchy low end, whether amplified or not. As an unplugged acoustic bass, its agathis body and sides give it a warm tone.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS5.jpeg',
    },
    {
    name: 'Gibson 2020 Les Paul Modern',
    type: 'Guitar',
    style: 'Electric',
    price: 2379.99,
    quantity: 3,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    },
    {
    name: 'Gibson SG Standard 1',
    type: 'Guitar',
    style: 'Electric',
    price: 1299.99,
    quantity: 2,
    description:
      "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    },
    {
    name: 'Gibson Les Paul Standard Solid Body A',
    type: 'Guitar',
    style: 'Electric',
    price: 2079.99,
    quantity: 5,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    },
    {
    name: 'Gibson Les Paul Traditional Pro V Solid Body B',
    type: 'Guitar',
    style: 'Electric',
    price: 1699.99,
    quantity: 1,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    },
    {
    name: 'Gibson Firebird Solid Body A1',
    type: 'Guitar',
    style: 'Electric',
    price: 1389.99,
    quantity: 6,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    },
    {
    name: 'Gibson 2018 Les Paul Modern Solid Body B',
    type: 'Guitar',
    style: 'Electric',
    price: 2179.99,
    quantity: 3,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    },
    {
    name: 'Gibson SG Standard Lite',
    type: 'Guitar',
    style: 'Electric',
    price: 1599.99,
    quantity: 3,
    description:
      "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    },
    {
    name: 'Gibson Les Paul Standard B1',
    type: 'Guitar',
    style: 'Electric',
    price: 2579.99,
    quantity: 5,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    },
    {
    name: 'Gibson Les Paul Traditional Pro 2',
    type: 'Guitar',
    style: 'Electric',
    price: 1499.99,
    quantity: 1,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    },
    {
    name: 'Gibson Firebird B',
    type: 'Guitar',
    style: 'Electric',
    price: 1889.99,
    quantity: 6,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    },
    {
    name: 'Gibson 2019 Les Paul Modern 1',
    type: 'Guitar',
    style: 'Electric',
    price: 2279.99,
    quantity: 3,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    },
    {
    name: 'Gibson SGA',
    type: 'Guitar',
    style: 'Electric',
    price: 1099.99,
    quantity: 2,
    description:
      "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    },
    {
    name: 'Gibson Les Paul Studio 2',
    type: 'Guitar',
    style: 'Electric',
    price: 2179.99,
    quantity: 5,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    },
    {
    name: 'Gibson Les Paul Traditional Pro V Solid Lite',
    type: 'Guitar',
    style: 'Electric',
    price: 1699.99,
    quantity: 1,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    },
    {
    name: 'Gibson Firebird Solid Body 2A',
    type: 'Guitar',
    style: 'Electric',
    price: 1389.99,
    quantity: 6,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    },
    {
    name: 'Gibson 2018 Les Paul Modern A',
    type: 'Guitar',
    style: 'Electric',
    price: 2179.99,
    quantity: 3,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    },
    {
    name: 'Gibson 2015 SG Standard',
    type: 'Guitar',
    style: 'Electric',
    price: 1599.99,
    quantity: 3,
    description:
      "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    },
    {
    name: 'Gibson 1999 Les Paul Standard Pro',
    type: 'Guitar',
    style: 'Electric',
    price: 2579.99,
    quantity: 5,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    },
    {
    name: 'Gibson 1984 Les Paul Traditional',
    type: 'Guitar',
    style: 'Electric',
    price: 1499.99,
    quantity: 1,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    },
    {
    name: 'Gibson 2011 Firebird',
    type: 'Guitar',
    style: 'Electric',
    price: 1889.99,
    quantity: 6,
    description:
      'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    },
    {
    name: 'Gibson 1965 J-45 Standard Vintage Sunburst',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG1.jpeg',
    },
    {
    name: 'Gibson 2004 G45 Studio',
    type: 'Guitar',
    style: 'Acoustic',
    price: 889.99,
    quantity: 1,
    description:
      'Sitka spruce top yields a direct, punchy sound with incomparable dynamic range. Walnut back and sides deliver a gorgeous balance of dark warmth and bright, bell-like ring. Easy-playing advanced-response utile neck with striped ebony fingerboard.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson 1977 Hummingbird Original',
    type: 'Guitar',
    style: 'Acoustic',
    price: 3199.2,
    quantity: 4,
    description:
      'The Hummingbird\'s mahogany neck has a comfortable rounded profile and mother of pearl parallelogram inlays.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson 60s J-45 Original',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 1,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson 70s J-45 Studio Walnut',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2299,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson 1998 J-45 Standard Vintage',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG1.jpeg',
    },
    {
    name: 'Gibson 2006 G45',
    type: 'Guitar',
    style: 'Acoustic',
    price: 889.99,
    quantity: 1,
    description:
      'Sitka spruce top yields a direct, punchy sound with incomparable dynamic range. Walnut back and sides deliver a gorgeous balance of dark warmth and bright, bell-like ring. Easy-playing advanced-response utile neck with striped ebony fingerboard.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson Hummingbird A3',
    type: 'Guitar',
    style: 'Acoustic',
    price: 3199.2,
    quantity: 4,
    description:
      'The Hummingbird\'s mahogany neck has a comfortable rounded profile and mother of pearl parallelogram inlays.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson 40s J-45',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 1,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson 1967 J-45 Studio',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2299,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson 1961 J-45 Standard',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG1.jpeg',
    },
    {
    name: 'Gibson G45C',
    type: 'Guitar',
    style: 'Acoustic',
    price: 889.99,
    quantity: 1,
    description:
      'Sitka spruce top yields a direct, punchy sound with incomparable dynamic range. Walnut back and sides deliver a gorgeous balance of dark warmth and bright, bell-like ring. Easy-playing advanced-response utile neck with striped ebony fingerboard.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson Hummingbird D',
    type: 'Guitar',
    style: 'Acoustic',
    price: 3199.2,
    quantity: 4,
    description:
      'The Hummingbird\'s mahogany neck has a comfortable rounded profile and mother of pearl parallelogram inlays.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Gibson 1983 J-45',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2849,
    quantity: 1,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG4.jpeg',
    },
    {
    name: 'Gibson 1964 J-45 Studio A',
    type: 'Guitar',
    style: 'Acoustic',
    price: 2299,
    quantity: 2,
    description:
      'World renowned for its full, balanced expression, warm bass and excellent projection, the J-45 has been refined to carry this legacy to new heights.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/AG5.jpeg',
    },
    {
    name: 'Rogue RM-100B A-Style',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 399.99,
    quantity: 2,
    description:
      'Sporting a gorgeous finish, the Rogue RM-100A is a well-built, traditional A-model mandolin. It features clean workmanship throughout and projects a bright tone with lots of bark. With an easy-to-play neck and adjustable bridge, the RM-100A is perfect for beginners who wish to play bluegrass or any other style of music. Finishing touches include chrome tuners and nickel-plated frets.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'The Loar LM-310F2 Hand-Carved F-Style',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 149.99,
    quantity: 2,
    description:
      'Authentic mandolin "chop" is recognizable from the first strum, and can only be found in an instrument with a true, hand-carved spruce top. The Loar hand-carved the tops of the LM-310F to provide that real 1920\'s sound, but with enough vibration to still cut through in today\'s ensemble playing.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN2.jpeg',
    },
    {
    name: 'Recording King RAM-3 Dirty 40s A-Style',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 1069,
    quantity: 3,
    description:
      'The Dirty 30s Mandolin is the perfect instrument for troubadours, songwriters or multi-instrumentalists who want a mandolin that delivers classic old-time sound without the price tag of a vintage instrument. The Dirty 30s Mandolin is a traditional A-style with vintage appointments.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN3.jpeg',
    },
    {
    name: 'Washburn 1987 M3SW Americana F-Style Sunburst',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 219.99,
    quantity: 2,
    description:
      'This F Style all sold wood instrument features a solid carved European spruce top, and solid carved Canadian maple back and sides and is perfect for bluegrass and Americana styles of music.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'Ibanez M510G A-STYLE',
    type: 'Mandolin',
    style: 'Electric',
    price: 219.99,
    quantity: 4,
    description:
      'The M510E from Ibanez is an A-style acoustic/electric mandolin made with a spruce top, mahogany back and sides, a mahogany neck with a rosewood fingerboard, bridge, and saddle, as well as chrome tuners. It is painted in a dark violin sunburst gloss finish and comes set up with bronze strings.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN5.jpeg',
    },
    {
    name: 'Rogue RM-100C',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 399.99,
    quantity: 2,
    description:
      'Sporting a gorgeous finish, the Rogue RM-100A is a well-built, traditional A-model mandolin. It features clean workmanship throughout and projects a bright tone with lots of bark. With an easy-to-play neck and adjustable bridge, the RM-100A is perfect for beginners who wish to play bluegrass or any other style of music. Finishing touches include chrome tuners and nickel-plated frets.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'The Loar LM-310A Hand-Carved',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 149.99,
    quantity: 2,
    description:
      'Authentic mandolin "chop" is recognizable from the first strum, and can only be found in an instrument with a true, hand-carved spruce top. The Loar hand-carved the tops of the LM-310F to provide that real 1920\'s sound, but with enough vibration to still cut through in today\'s ensemble playing.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN2.jpeg',
    },
    {
    name: 'Recording King RAM Dirty 30s',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 1069,
    quantity: 3,
    description:
      'The Dirty 30s Mandolin is the perfect instrument for troubadours, songwriters or multi-instrumentalists who want a mandolin that delivers classic old-time sound without the price tag of a vintage instrument. The Dirty 30s Mandolin is a traditional A-style with vintage appointments.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN3.jpeg',
    },
    {
    name: 'Washburn M3SWH Americana F-Style',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 219.99,
    quantity: 2,
    description:
      'This F Style all sold wood instrument features a solid carved European spruce top, and solid carved Canadian maple back and sides and is perfect for bluegrass and Americana styles of music.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'Ibanez M51',
    type: 'Mandolin',
    style: 'Electric',
    price: 219.99,
    quantity: 4,
    description:
      'The M510E from Ibanez is an A-style acoustic/electric mandolin made with a spruce top, mahogany back and sides, a mahogany neck with a rosewood fingerboard, bridge, and saddle, as well as chrome tuners. It is painted in a dark violin sunburst gloss finish and comes set up with bronze strings.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN5.jpeg',
    },
    {
    name: 'Rogue RM-1044',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 399.99,
    quantity: 2,
    description:
      'Sporting a gorgeous finish, the Rogue RM-100A is a well-built, traditional A-model mandolin. It features clean workmanship throughout and projects a bright tone with lots of bark. With an easy-to-play neck and adjustable bridge, the RM-100A is perfect for beginners who wish to play bluegrass or any other style of music. Finishing touches include chrome tuners and nickel-plated frets.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'The Loar LM-10F',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 149.99,
    quantity: 2,
    description:
      'Authentic mandolin "chop" is recognizable from the first strum, and can only be found in an instrument with a true, hand-carved spruce top. The Loar hand-carved the tops of the LM-310F to provide that real 1920\'s sound, but with enough vibration to still cut through in today\'s ensemble playing.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN2.jpeg',
    },
    {
    name: 'Recording King RAM-5',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 1069,
    quantity: 3,
    description:
      'The Dirty 30s Mandolin is the perfect instrument for troubadours, songwriters or multi-instrumentalists who want a mandolin that delivers classic old-time sound without the price tag of a vintage instrument. The Dirty 30s Mandolin is a traditional A-style with vintage appointments.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN3.jpeg',
    },
    {
    name: 'Washburn M3SfW Americana',
    type: 'Mandolin',
    style: 'Acoustic',
    price: 219.99,
    quantity: 2,
    description:
      'This F Style all sold wood instrument features a solid carved European spruce top, and solid carved Canadian maple back and sides and is perfect for bluegrass and Americana styles of music.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN1.jpeg',
    },
    {
    name: 'Ibanez M5a10',
    type: 'Mandolin',
    style: 'Electric',
    price: 219.99,
    quantity: 4,
    description:
      'The M510E from Ibanez is an A-style acoustic/electric mandolin made with a spruce top, mahogany back and sides, a mahogany neck with a rosewood fingerboard, bridge, and saddle, as well as chrome tuners. It is painted in a dark violin sunburst gloss finish and comes set up with bronze strings.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/MAN5.jpeg',
    },
    {
    name: 'Fender 1987 Player Jazz Plus Top Limited-Edition Blue Burst',
    type: 'Bass',
    style: 'Electric',
    price: 779.99,
    quantity: 3,
    description:
      'This limited-edition Player Jazz Bass Plus Top in Blue Burst delivers everything a bass player expects from a traditional Jazz Bass, but adds a stunning flame maple veneer. Loaded with Player Jazz Bass pickups, this bass is powerful and articulate with well-balanced tone for any number of playing styles. The Blue Burst finish over flame maple makes this bass as stunning visually as it is sonically.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS1.jpeg',
    },
    {
    name: 'Sterling Music Man StingRay Ray4 Maple Fingerboard Black',
    type: 'Bass',
    style: 'Electric',
    price: 349.99,
    quantity: 4,
    description:
      'The StingRay Ray4 Maple Fingerboard electric bass is the cousin of the Music Man StingRay 4 bass. Classic, iconic instruments that defined a generation of bassists since the late \'70s. Active electronics, low-noise humbucking pickup, rock-solid hardware and a simple, uncluttered look that is instantly recognizable and respected.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS2.jpeg',
    },
    {
    name: 'Fender Precision Maple Fingerboard Buttercream',
    type: 'Bass',
    style: 'Electric',
    price: 849.99,
    quantity: 2,
    description:
      'The “Modern C”-shaped maple neck\'s hosts a 9.5”-radius fingerboard with 20 medium-jumbo frets that are ideal for almost any playing style, while the 4-saddle bridge is engineered for accurate intonation and easy action adjustment so you can personalize the feel to your playing style and taste.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS3.jpeg',
    },
    {
    name: 'Sire Marcus Miller Swamp Ash 5-StringSire Marcus Miller V10 Swamp Ash 5-String',
    type: 'Bass',
    style: 'Electric',
    price: 1499,
    quantity: 3,
    description:
      'Resonant ash body and solid maple top with flamed maple veneer for punchy, pristine, and powerful bass tone. Roasted flamed maple neck and fingerboard for impeccably smooth playability and comfortable response up and down the neck.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS4.jpeg',
    },
    {
    name: 'Ibanez AEB5E AE Black',
    type: 'Bass',
    style: 'Acoustic',
    price: 269.99,
    quantity: 6,
    description:
      'The Ibanez AEB5E acoustic-electric bass delivers a punchy low end, whether amplified or not. As an unplugged acoustic bass, its agathis body and sides give it a warm tone.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS5.jpeg',
    },
    {
    name: 'Fender Player Jazz Plus 2 Top Limited-Edition Blue',
    type: 'Bass',
    style: 'Electric',
    price: 779.99,
    quantity: 2,
    description:
      'This limited-edition Player Jazz Bass Plus Top in Blue Burst delivers everything a bass player expects from a traditional Jazz Bass, but adds a stunning flame maple veneer. Loaded with Player Jazz Bass pickups, this bass is powerful and articulate with well-balanced tone for any number of playing styles. The Blue Burst finish over flame maple makes this bass as stunning visually as it is sonically.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS1.jpeg',
    },
    {
    name: 'Sterling by Music Man StingRay Ray 8',
    type: 'Bass',
    style: 'Electric',
    price: 349.99,
    quantity: 4,
    description:
      'The StingRay Ray4 Maple Fingerboard electric bass is the cousin of the Music Man StingRay 4 bass. Classic, iconic instruments that defined a generation of bassists since the late \'70s. Active electronics, low-noise humbucking pickup, rock-solid hardware and a simple, uncluttered look that is instantly recognizable and respected.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS2.jpeg',
    },
    {
    name: 'Fender Player Precision B Maple Fingerboard',
    type: 'Bass',
    style: 'Electric',
    price: 849.99,
    quantity: 2,
    description:
      'The “Modern C”-shaped maple neck\'s hosts a 9.5”-radius fingerboard with 20 medium-jumbo frets that are ideal for almost any playing style, while the 4-saddle bridge is engineered for accurate intonation and easy action adjustment so you can personalize the feel to your playing style and taste.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS3.jpeg',
    },
    {
    name: 'Sire Marcus Miller V101 Swamp Ash 5-StringSire Marcus Miller V10 Swamp Ash',
    type: 'Bass',
    style: 'Electric',
    price: 1499,
    quantity: 3,
    description:
      'Resonant ash body and solid maple top with flamed maple veneer for punchy, pristine, and powerful bass tone. Roasted flamed maple neck and fingerboard for impeccably smooth playability and comfortable response up and down the neck.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS4.jpeg',
    },
    {
    name: 'Ibanez AEB5E Acoustic-Electric 15',
    type: 'Bass',
    style: 'Acoustic',
    price: 269.99,
    quantity: 6,
    description:
      'The Ibanez AEB5E acoustic-electric bass delivers a punchy low end, whether amplified or not. As an unplugged acoustic bass, its agathis body and sides give it a warm tone.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS5.jpeg',
    },
    {
    name: 'Fender Player Jazz Plus Top Limited-Edition 76',
    type: 'Bass',
    style: 'Electric',
    price: 779.99,
    quantity: 2,
    description:
      'This limited-edition Player Jazz Bass Plus Top in Blue Burst delivers everything a bass player expects from a traditional Jazz Bass, but adds a stunning flame maple veneer. Loaded with Player Jazz Bass pickups, this bass is powerful and articulate with well-balanced tone for any number of playing styles. The Blue Burst finish over flame maple makes this bass as stunning visually as it is sonically.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS1.jpeg',
    },
    {
    name: 'Sterling B by Music Man',
    type: 'Bass',
    style: 'Electric',
    price: 349.99,
    quantity: 4,
    description:
      'The StingRay Ray4 Maple Fingerboard electric bass is the cousin of the Music Man StingRay 4 bass. Classic, iconic instruments that defined a generation of bassists since the late \'70s. Active electronics, low-noise humbucking pickup, rock-solid hardware and a simple, uncluttered look that is instantly recognizable and respected.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS2.jpeg',
    },
    {
    name: 'Fender 1999 Player Precision',
    type: 'Bass',
    style: 'Electric',
    price: 849.99,
    quantity: 2,
    description:
      'The “Modern C”-shaped maple neck\'s hosts a 9.5”-radius fingerboard with 20 medium-jumbo frets that are ideal for almost any playing style, while the 4-saddle bridge is engineered for accurate intonation and easy action adjustment so you can personalize the feel to your playing style and taste.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS3.jpeg',
    },
    {
    name: 'Sire Marcus Miller V210 Swamp Ash 5-StringSire Marcus Miller V10',
    type: 'Bass',
    style: 'Electric',
    price: 1499,
    quantity: 3,
    description:
      'Resonant ash body and solid maple top with flamed maple veneer for punchy, pristine, and powerful bass tone. Roasted flamed maple neck and fingerboard for impeccably smooth playability and comfortable response up and down the neck.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS4.jpeg',
    },
    {
    name: 'Ibanez AEB5E9 Acoustic',
    type: 'Bass',
    style: 'Acoustic',
    price: 269.99,
    quantity: 6,
    description:
      'The Ibanez AEB5E acoustic-electric bass delivers a punchy low end, whether amplified or not. As an unplugged acoustic bass, its agathis body and sides give it a warm tone.',
    imageUrl:
      'http://yellowroomrecording.com/wp-content/uploads/2022/11/BASS5.jpeg',
    },
  ]

  module.exports = productData

