/**
   @module ABLParser
   @module UnitTests
*/
var ABLModule = require('../ABLModule');


/**
   utility to combine multiple clauses together
   @class UnitTests.conditionalExpressionTests 
*/
exports.mixedCallTests = {

    /**
       initial smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "True"
        var startRule = "mixedCall";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "mixedCall",result[0].type);
        test.ok(result[0].clauses.length === 1);
        test.ok(result[0].clauses[0][1] === "default");
        test.ok(result[0].clauses[0][0].type === "binaryOp",result[0].clauses[0].type);
        test.ok(result[0].clauses[0][0].operator === undefined);
        test.ok(result[0].clauses[0][0].expression[0].type === "ablExpression");
        test.ok(result[0].clauses[0][0].expression[0].varType === "ablLiteral");
        test.ok(result[0].clauses[0][0].expression[0].value.value === "True");
        test.ok(result[0].clauses[0][0].expression[0].value.varType === "bool");

        
        test.done();
    },

    //test two booleans AND'd
    andTest : function(test){
        var parseString = "True && False";
        var startRule = "mixedCall";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "mixedCall");
        test.ok(result[0].clauses.length === 2);
        test.ok(result[0].clauses[0][1] === "default");
        test.ok(result[0].clauses[0][0].type === "binaryOp");
        test.ok(result[0].clauses[0][0].expression[0].type === "ablExpression");
        test.ok(result[0].clauses[0][0].expression[0].value.type === "ablLiteral");
        test.ok(result[0].clauses[0][0].expression[0].value.varType === "bool");
        test.ok(result[0].clauses[0][0].expression[0].value.value === "True");
                
        test.ok(result[0].clauses[1][1] === "and");
        test.ok(result[0].clauses[1][0].type === "binaryOp");
                
        
        test.done();
    },

    
    //test two booleans OR'd

    //Test more than two boolesn

    //Test names

    //test javaMethods

    //test binaryOps

};
