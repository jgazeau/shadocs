name: Feature
description: Propose a new feature
title: "[feature_request]: "
labels: ["enhancement"]
body:
  - type: textarea
    id: porposal-feature
    attributes:
      label: What is missing in the theme?
      description: Please provide what is missing in the theme and why it should be added?
      value: |
        * This feature is missing from the theme:
          
          ...
          
        * I already have an idea of the implementation:
          
          ...
          
    validations:
      required: true