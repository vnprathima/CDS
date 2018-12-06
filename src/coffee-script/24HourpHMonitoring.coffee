module.exports = {
   "library" : {
      "identifier" : {
         "id" : "ChlamydiaScreening_Common",
         "version" : "2"
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
            "uri" : "urn:healthit-gov:qdm:v5_3",
            "version" : "5.3"
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "name" : "SNOMEDCT",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public"
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "name" : "Continuous measurement of pH in esophagus over 24 hour period (procedure)",
            "id" : "2.16.840.1.113883.3.88.12.80.28",
            "accessLevel" : "Public"
         }, {
            "name" : "Gastric reflux (finding)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Abnormal illness behavior (finding)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Digestive symptom (finding)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Traditional therapy (regime/therapy)",
            "id" : "2.16.840.1.113883.3.88.12.80.28",
            "accessLevel" : "Public"
         }, {
            "name" : "",
            "id" : "",
            "accessLevel" : "Public"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{urn:healthit-gov:qdm:v5_3}Patient",
                  "templateId" : "Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "name" : "Result for conventional therapy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Not",
               "operand" : {
                  "type" : "Exists",
                  "operand" : {
                     "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                     "codeProperty" : "code",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Gastric reflux (finding)",
                        "type" : "ValueSetRef"
                     }
                  }
               }
            }
         }, {
            "name" : "Covered",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "Exists",
                        "operand" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "T",
                              "expression" : {
                                 "dataType" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                                 "templateId" : "PositiveProcedurePerformed",
                                 "codeProperty" : "code",
                                 "type" : "Retrieve",
                                 "codes" : {
                                    "name" : "Traditional therapy (regime/therapy)",
                                    "type" : "ValueSetRef"
                                 }
                              }
                           } ],
                           "relationship" : [ ],
                           "where" : {
                              "type" : "Equal",
                              "operand" : [ {
                                 "path" : "result",
                                 "scope" : "T",
                                 "type" : "Property"
                              }, {
                                 "name" : "Result for conventional therapy",
                                 "type" : "ExpressionRef"
                              } ]
                           }
                        }
                     }, {
                        "type" : "Exists",
                        "operand" : {
                           "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                           "codeProperty" : "code",
                           "type" : "Retrieve",
                           "codes" : {
                              "name" : "Digestive symptom (finding)",
                              "type" : "ValueSetRef"
                           }
                        }
                     } ]
                  }
               },
               "then" : {
                  "dataType" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                  "templateId" : "PositiveProcedurePerformed",
                  "codeProperty" : "code",
                  "type" : "Retrieve",
                  "codes" : {
                     "name" : "Continuous measurement of pH in esophagus over 24 hour period (procedure)",
                     "type" : "ValueSetRef"
                  }
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "name" : "Coverage",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Covered",
               "type" : "ExpressionRef"
            }
         } ]
      }
   }
}

