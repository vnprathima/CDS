module.exports = {
   "library" : {
      "identifier" : {
         "id" : "Acupuncture"
      },
      "schemaIdentifier" : {
         "id" : "urn:hl7-org:elm",
         "version" : "r1"
      },
      "usings" : {
         "def" : [ {
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localIdentifier" : "QDM",
            "uri" : "urn:healthit-gov:qdm:v5_4"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{urn:healthit-gov:qdm:v5_4}Patient",
                  "templateId" : "Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "name" : "Coverage",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "false",
               "type" : "Literal"
            }
         } ]
      }
   }
}

