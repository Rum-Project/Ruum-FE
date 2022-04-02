import roomcardFixture from "../../cypress/fixtures/roomcardFixture.json";
import roomDetailsFixture from "../../cypress/fixtures/roomDetailsFixture.json";
// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return (
    body.hasOwnProperty("operationName") && body.operationName === operationName
  );
};

// Alias query if operationName matches
export const aliasQuery = (req, operationName, fixture) => {
  //   if (
  //     hasOperationName(req, operationName) &&
  //     operationName === "getAvailableRooms"
  //   ) {
  //     req.alias = `gql${operationName}Query`;
  //     req.reply((res) => {
  //       res.body.data = roomcardFixture;
  //     });
  //   }
  //   if (hasOperationName(req, operationName) && operationName === "getRoom") {
  //     req.body.variables.id = 1;
  //     req.alias = `gql${operationName}Query`;
  //     req.reply((res) => {
  //       res.body.data = roomDetailsFixture;
  //     });
  //   }
  if (
    req.body.hasOwnProperty("query") &&
    req.body.query.includes(operationName)
  ) {
    req.alias = operationName;
    req.reply({ statusCode: 200, fixture: fixture });
  }
};

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
  if (
    req.body.hasOwnProperty("mutation") &&
    req.body.query.includes(operationName)
  ) {
    req.body.variables.id = 1;
    req.alias = operationName;
    req.reply({ statusCode: 200, fixture: fixture });
  }
};
