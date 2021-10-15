# NEXXIST
<img style="{ height: 200px; }" src="./images/nexxist-logo-1.png"><br><br>

Nexxist is an application that is going to chage how people find real estate investment properties that are great investment properties. It is an open and public mls that will track and load property details as well as important investing metrics that are calculated with each home<br><br>

current deployment version: 1.0.0<br><br>

Nexxist consist of two different main sections in the current version:<br><br>

Future Changes - <br>
    -Link to Zillow Api<br>
    -Allow city, zip-code, and address search<br>
    -Render existing homes<br>
    -Additional styling<br>
    -Functioning filters and sorting<br>
    -Account creation<br>
    -Property Favoriting<br>

Header section:<br><br>

<img style="{ height: 200px; }" src="./images/s-h-header.png"><br><br>

The header section functionality will be added in the next update.
The header section will allow the users to complete a variety of tasks including<br>
    -filter price, beds, baths, and property type <br>
    -sort results<br>
    -input a search of address, zip-code, and city to get all the properties in a specific area<br>
    -create a profile and save your searches as well as favorites<br><br>

<img style="{ height: 600px; }" src="./images/s-h-property.png"><br><br>

The main portion of Nexxist consist of the property card which you can see above. This will take data from Zillow and for each property, generate a block. This block will hold property details, general information, and calculate investment metrics that are key to finding the perfect real estate investment opportunity.<br><br>

Property Details:<br>
    -price<br>
    -status<br>
    -beds<br>
    -baths<br>
    -square feet<br>
    -lot<br>
    -address<br>
    -days listed<br>
    -mls id <br>
    -agent<br>
    -broker<br><br>

General information:<br>
    -principle and interest<br>
        -this will be automatically generated based on default loan parameters. A traditional loan for a home consist of 20% down payment, 30 years, and an interest rate of 3.15%<br>
    -Property Tax<br>
        -this is the current amount of property tax and the owner will pay every year. It is currently based on California Property Tax Rate.<br>
    -Home Insurance<br>
        -this is the current amount of home insurance the owner will pay every year. It is currently based on California Property Tax Rate.<br>
    -HOA<br>
        -if a property has an hoa monthly payment, it is added here and will contribute to the overall expenses every month<br>
    -Additional Cost:<br>
        -this is where the owner can input any additional costs every month that they expect to pay on the property in order to accurately calculate the investment metrics<br><br>
    
Revenue:<br>
    -Rent<br>
        - This is where the user can input how much they are expecting to chage every month on rent. It will dynamically chagne the investment metrics to reflect the most updated metrics<br>
    -Revenue<br>
        -these are any additional revenue that is generated with the proerty outside of the rent to correctly calculate investment metrics<br><br>

Investment Metrics:<br>
    ** this section is where a user can immediately see some of the most important statistics when it comes to investing before they purchase a property **<br>
    ** Some metrics will calculate and display 2 statistics. One if the buyer has a mortgage and the other if the buyer pays for the property in full **<br>
    -Cash Flow<br>
    -Cash on Cash return<br>
    -Gross Operating Income<br>
    -Operating Expense Ratio<br>
    -Net Operating Income<br>
    -Captialization Rate<br>
    -Internal Rate of Return<br>
    -Rent Cost Ratio<br>
    -Gross Rent Multiplier<br>
    -Vacancy Rate<br>
    -Depreciation<br>
    -Return On Inv.<br>
