// CLI
// nos permitirá administrar los recursos de kodemia
// - koders
//   - add (kodemia.js koders add --name=[name] --email=[email])
//   - add (kodemia.js koders add --email=[email] --firstName=gregre)
//   - rm (kodemia.js koders rm --id=[id])
//   - ls
// - mentors
// - generations

const db = require("./src/lib/db");
const kodersActions = require("./src/commands/koders.commands");

const resource = process.argv[2]; // koders, mentors, generations
const action = process.argv[3]; // add, rm, ls

const allowedActions = {
  koders: kodersActions,
  mentors: {},
  generations: {},
};

// allowedActions.koders;
// const actions = allowedActions["koders"];

// actions.add();
// actions["add"]();

db.connect()
  .then(async () => {
    console.log("DB connected");

    const resourceActions = allowedActions[resource];

    if (!resourceActions) {
      console.error(`UNKNOWN RESOURCE ${resource}`);
      process.exit(3);
    }

    const requestedAction = resourceActions[action];

    if (!requestedAction) {
      console.error(`UNKNOWN ACTION ${action}`);
      process.exit(2);
    }

    await requestedAction();
  })
  .catch((error) => {
    console.error("DB connection error:", error);
    process.exit(1);
  });

// Promises (promesas)

// son objetos que representan la terminación o el fracaso de una operación asíncrona

// estados
// - pendiente (pending)
// - resuelta (fulfilled) .then(function (resultado))
// - rechazada (rejected) .catch(function (error))
