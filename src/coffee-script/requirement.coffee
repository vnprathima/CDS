module.exports = {
   "library" : {
      "identifier" : {
         "id" : "AdultLiverTransplantation",
         "version" : "1"
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
         }, {
            "name" : "HCPCS",
            "id" : "2.16.840.1.113883.6.285",
            "accessLevel" : "Public"
         }, {
            "name" : "NDFRT",
            "id" : "2.16.840.1.113883.3.26.1.5",
            "accessLevel" : "Public"
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "name" : "End Stage Liver Disease",
            "id" : "2.16.840.1.113883.17.4077.3.1000",
            "accessLevel" : "Public"
         }, {
            "name" : "Instructions for Follow Up After Discharge",
            "id" : "2.16.840.1.113883.3.117.1.7.1.378",
            "accessLevel" : "Public"
         }, {
            "name" : "Immunosuppressive therapy for transplant (procedure)",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public"
         }, {
            "name" : "Postoperative follow-up visit (procedure)",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public"
         }, {
            "name" : "Aftercare for liver transplant done (situation)",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public"
         }, {
            "name" : "Recommendation to start prescription medication (procedure)",
            "id" : "2.16.840.1.113883.3.88.12.80.28",
            "accessLevel" : "Public"
         }, {
            "name" : "Ambulatory Health Care Facilities; Clinic/Center, Federally Qualified Health Center (FQHC)",
            "id" : "2.16.840.1.114222.4.11.1066",
            "accessLevel" : "Public"
         }, {
            "name" : "Transplantation of liver (procedure)",
            "id" : "2.16.840.1.113883.3.666.5.801",
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
            "name" : "Documents",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "As",
                  "operand" : {
                     "type" : "Union",
                     "operand" : [ {
                        "type" : "As",
                        "operand" : {
                           "type" : "Union",
                           "operand" : [ {
                              "type" : "As",
                              "operand" : {
                                 "type" : "Union",
                                 "operand" : [ {
                                    "type" : "As",
                                    "operand" : {
                                       "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                       "codeProperty" : "code",
                                       "type" : "Retrieve",
                                       "codes" : {
                                          "name" : "End Stage Liver Disease",
                                          "type" : "ValueSetRef"
                                       }
                                    },
                                    "asTypeSpecifier" : {
                                       "type" : "ListTypeSpecifier",
                                       "elementType" : {
                                          "type" : "ChoiceTypeSpecifier",
                                          "type" : [ {
                                             "name" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                             "type" : "NamedTypeSpecifier"
                                          }, {
                                             "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                                             "type" : "NamedTypeSpecifier"
                                          } ]
                                       }
                                    }
                                 }, {
                                    "type" : "As",
                                    "operand" : {
                                       "dataType" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                                       "templateId" : "PositiveProcedurePerformed",
                                       "codeProperty" : "code",
                                       "type" : "Retrieve",
                                       "codes" : {
                                          "name" : "Transplantation of liver (procedure)",
                                          "type" : "ValueSetRef"
                                       }
                                    },
                                    "asTypeSpecifier" : {
                                       "type" : "ListTypeSpecifier",
                                       "elementType" : {
                                          "type" : "ChoiceTypeSpecifier",
                                          "type" : [ {
                                             "name" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                             "type" : "NamedTypeSpecifier"
                                          }, {
                                             "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                                             "type" : "NamedTypeSpecifier"
                                          } ]
                                       }
                                    }
                                 } ]
                              },
                              "asTypeSpecifier" : {
                                 "type" : "ListTypeSpecifier",
                                 "elementType" : {
                                    "type" : "ChoiceTypeSpecifier",
                                    "type" : [ {
                                       "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedureOrder",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "name" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                                       "type" : "NamedTypeSpecifier"
                                    } ]
                                 }
                              }
                           }, {
                              "type" : "As",
                              "operand" : {
                                 "dataType" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedureOrder",
                                 "templateId" : "PositiveProcedureOrder",
                                 "codeProperty" : "code",
                                 "type" : "Retrieve",
                                 "codes" : {
                                    "name" : "Recommendation to start prescription medication (procedure)",
                                    "type" : "ValueSetRef"
                                 }
                              },
                              "asTypeSpecifier" : {
                                 "type" : "ListTypeSpecifier",
                                 "elementType" : {
                                    "type" : "ChoiceTypeSpecifier",
                                    "type" : [ {
                                       "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedureOrder",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "name" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                                       "type" : "NamedTypeSpecifier"
                                    } ]
                                 }
                              }
                           } ]
                        },
                        "asTypeSpecifier" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "type" : "ChoiceTypeSpecifier",
                              "type" : [ {
                                 "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedureOrder",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "name" : "{urn:healthit-gov:qdm:v5_3}Participation",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "name" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                                 "type" : "NamedTypeSpecifier"
                              } ]
                           }
                        }
                     }, {
                        "type" : "As",
                        "operand" : {
                           "dataType" : "{urn:healthit-gov:qdm:v5_3}Participation",
                           "codeProperty" : "code",
                           "type" : "Retrieve",
                           "codes" : {
                              "name" : "Ambulatory Health Care Facilities; Clinic/Center, Federally Qualified Health Center (FQHC)",
                              "type" : "ValueSetRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "type" : "ChoiceTypeSpecifier",
                              "type" : [ {
                                 "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedureOrder",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "name" : "{urn:healthit-gov:qdm:v5_3}Participation",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "name" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                                 "type" : "NamedTypeSpecifier"
                              } ]
                           }
                        }
                     } ]
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "ChoiceTypeSpecifier",
                        "type" : [ {
                           "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedureOrder",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "name" : "{urn:healthit-gov:qdm:v5_3}CareGoal",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "name" : "{urn:healthit-gov:qdm:v5_3}Participation",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "name" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                           "type" : "NamedTypeSpecifier"
                        } ]
                     }
                  }
               }, {
                  "type" : "As",
                  "operand" : {
                     "dataType" : "{urn:healthit-gov:qdm:v5_3}CareGoal",
                     "codeProperty" : "code",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Aftercare for liver transplant done (situation)",
                        "type" : "ValueSetRef"
                     }
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "ChoiceTypeSpecifier",
                        "type" : [ {
                           "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedureOrder",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "name" : "{urn:healthit-gov:qdm:v5_3}CareGoal",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "name" : "{urn:healthit-gov:qdm:v5_3}Participation",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "name" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "name" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                           "type" : "NamedTypeSpecifier"
                        } ]
                     }
                  }
               } ]
            }
         }, {
            "name" : "Requirements",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Documents",
               "type" : "ExpressionRef"
            }
         } ]
      }
   }
}

