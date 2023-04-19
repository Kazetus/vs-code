const {app, port} = require('./server');
const cors = require('cors');
const path = require('./route');

app.use(cors());
path.abonnementPath(app);
path.membresPath(app);
path.clubPath(app);
path.produitPath(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
