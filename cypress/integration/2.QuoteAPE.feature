Feature: QuoteAPE

Scenario: Adding a new quote from Quick Create popup
Given Verify Sales Navigator is opened
When Open Quick Create Wizard
And Select Create Quote on wizard
And Select Customer, Opportunity, Contact & Quote on create quote pop up
And i click Next to show Solution types
And Select the standard solution
And Click the finish button to add a new quote
Then "Cypress Test Quote" should display

#     Updating product quantity in quotes and verify normal and stepped bands pricing
@ignore
Scenario: Update product quantity and verify different bands pricing
Given Advance Quote is created with 24 months and product version is added having multiple price bands
When The user updates the product quantity
Then Correct pricing will be shown with product
And Correct pricing will be visible on pricing group screen
And Financials will be updated accordingly

#     add product in quote and amortize 
@ignore
Scenario: Verify that products are amortized at Proportion to be amortized 50% and Term 24
Given Products are added in quote with amortization enabled
When Select the pricing tab and then amortization tab
And Verify the values before amortize and check the Amortization Enabled checkbox
And Provide values in Interest Rate and Proportion to be amortized
And Click on Recalculate button
Then Value of Amortized Amount and Non Amortized Amount are updated on amortization screen
And Valeus are updated on Financials screen
And Quote Total values are updated correctly 
And Values are updated correctly in Pricing screen
And Values are updated correctly in Solution Grid