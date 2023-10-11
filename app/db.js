const mongoose = require('mongoose');
const News = require('./models/news'); // Import your News model

// Connect to your MongoDB database (replace 'your_database_name' with your actual database name)
mongoose.connect(process.env.MONOGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define sample news data
const sampleNewsData = [
  {
    title: 'Sample News 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed blandit quam. Vestibulum dapibus lacinia dapibus. Sed nulla lorem, malesuada at dui non, bibendum facilisis diam. In posuere eget arcu id pretium. Aliquam egestas libero magna, in commodo augue rutrum et. Sed ante lorem, placerat a varius placerat, bibendum sit amet ex. Donec elementum sed erat in luctus. Integer posuere blandit aliquam.

    Proin facilisis posuere massa sit amet ornare. Aenean eget hendrerit ligula. Quisque posuere pellentesque urna, a finibus erat tempus vitae. Donec lobortis ipsum non ipsum pulvinar congue. Nulla condimentum elementum finibus. Praesent mollis sapien a aliquet faucibus. Phasellus cursus ex et ipsum tempor sollicitudin. Donec metus magna, fermentum nec felis eget, porttitor sagittis nisi. Ut luctus congue elementum. Suspendisse feugiat elementum semper. Nulla vehicula ipsum ut nulla varius, eu vestibulum nisl auctor. Aliquam ut sapien ultrices magna porttitor tempor sit amet id dolor. Pellentesque ut felis id arcu eleifend tincidunt. Nullam auctor dapibus ipsum, vitae consectetur nibh sollicitudin nec. Phasellus bibendum augue at ullamcorper auctor. Sed massa nisl, sollicitudin in mattis at, interdum at justo.`,
    tags : 'Politics, Business',
    date : Date()

  },
  {
    title: 'Sample News 2',
    content: `Nam sapien nisl, commodo non dignissim non, pulvinar in urna. Cras consectetur augue sed odio dapibus, ut sodales turpis rutrum. Maecenas sem tortor, volutpat ac scelerisque eu, commodo eu nunc. Duis pharetra gravida consequat. Integer viverra at ligula eget rutrum. Integer efficitur odio erat, sit amet eleifend odio rhoncus eget. Suspendisse finibus massa sit amet augue vulputate vehicula. Sed condimentum, odio a tempor vulputate, massa lectus convallis ipsum, sit amet porttitor eros leo id justo. Fusce facilisis mauris ut nisi commodo porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce accumsan eleifend pharetra. Phasellus vel nunc non sapien gravida aliquam. Donec metus lectus, vehicula vel volutpat sed, porttitor in sapien. Curabitur dignissim mattis lorem in ullamcorper. Fusce nisi nulla, lacinia eget eros sed, efficitur iaculis nisi.`,
    tags : "Sports",
    date : Date()
  },
  {
    title: 'Sample News 3',
    content: `This is the content of sample news 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed blandit quam. Vestibulum dapibus lacinia dapibus. Sed nulla lorem, malesuada at dui non, bibendum facilisis diam. In posuere eget arcu id pretium. Aliquam egestas libero magna, in commodo augue rutrum et. Sed ante lorem, placerat a varius placerat, bibendum sit amet ex. Donec elementum sed erat in luctus. Integer posuere blandit aliquam.

    Proin facilisis posuere massa sit amet ornare. Aenean eget hendrerit ligula. Quisque posuere pellentesque urna, a finibus erat tempus vitae. Donec lobortis ipsum non ipsum pulvinar congue. Nulla condimentum elementum finibus. Praesent mollis sapien a aliquet faucibus. Phasellus cursus ex et ipsum tempor sollicitudin. Donec metus magna, fermentum nec felis eget, porttitor sagittis nisi. Ut luctus congue elementum. Suspendisse feugiat elementum semper. Nulla vehicula ipsum ut nulla varius, eu vestibulum nisl auctor. Aliquam ut sapien ultrices magna porttitor tempor sit amet id dolor. Pellentesque ut felis id arcu eleifend tincidunt. Nullam auctor dapibus ipsum, vitae consectetur nibh sollicitudin nec. Phasellus bibendum augue at ullamcorper auctor. Sed massa nisl, sollicitudin in mattis at, interdum at justo.`,
    tags : "Sports,Entertaiment",
    date : Date()
  },
];

// Function to seed the database with sample news data
async function seedDatabase() {
  try {
    // Remove existing news data (optional, depending on your use case)
    await News.deleteMany({});

    // Insert the sample news data into the database
    await News.insertMany(sampleNewsData);

    await News.save()

    console.log('Sample data has been added to the database.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the database connection
    db.close();
  }
}

// Call the seedDatabase function to populate the database with sample data
seedDatabase();
