# Project Overview

## Project Description

For this project, I plan to make an application that will teach the user about the basics of federal tax law.
I will keep user data in API and utilze 2, possibly 3 relational models in the API using Rails. Also, I will have a
database for tax tables that will calulate taxes for those making less than \$100K. The main goal of this app is
teach others tax knowlege they otherwise wouldn't understand.

## Models

```
create_table "information", force: :cascade do |t|
    t.string "name"
    t.boolean "citizen"
    t.integer "age"
    t.string "marital_status"
    t.string "address"
    t.boolean "dependent"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

    create_table "tax_informations", force: :cascade do |t|
    t.integer "w2_wages"
    t.integer "capital_gains"
    t.integer "unemployment_insurance"
    t.integer "self_employment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "information_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
```

POSSIBLY MORE, WE WILL HAVE TO SEE HOW MVP TURNS OUT
I MAY INCLUDE TAX TABLE API WITH MONGO (IT WILL SIMPLY COMPARE WITH USRE INPUT)

## API

API Structure

```
  data = [
    {
      id: 1,
      email: "m@gmail.com",
      password_digest:
        "$2a$12$Kvk5mpZE4kXbWSHkZ/yuIO6Cv/WILcttYbEmjWBHsAlWjqEH1lrCW",
      created_at: "2020-08-17T19:14:44.280Z",
      updated_at: "2020-08-17T19:14:44.280Z",
      information: [
        {
          id: 1,
          name: "Ckorb Blansing",
          age: 25,
          marital_status: "single",
          state: "NJ",
          dependent: false,
          created_at: "2020-08-17T19:14:44.335Z",
          updated_at: "2020-08-17T19:14:44.335Z",
          user_id: 1,
          tax_information: [
            {
              id: 1,
              w2_wages: 20000,
              capital_gains: 500,
              unemployment_insurance: 0,
              self_employment: 0,
              created_at: "2020-08-17T19:14:44.375Z",
              updated_at: "2020-08-17T19:14:44.375Z",
              information_id: 1,
            },
          ],
        },
      ],
    },
  ];
  ]


```

## Wireframes AND Components

Upload images of wireframe to imgur and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.
| Before (Expected Layout): |
| (https://imgur.com/aaBMnU5) |
| (https://imgur.com/w2GBeT2) |
| (https://imgur.com/ITnCIzI )|

## Project Schedule

| Day   | Deliverable                                                 | Status     |
| ----- | ----------------------------------------------------------- | ---------- |
| Day 1 | Project Description                                         | Complete   |
| Day 1 | Wireframes / Priority Matrix / Timeline /WorkSheet          | Complete   |
| Day 1 | Complete Backend on Rails                                   | Complete   |
| Day 2 | Allow User Login, Authorization to certain portions of site | Complete   |
| Day 3 | Apply Crud That Will Allow Customization of Profile         | Complete   |
| Day 3 | Apply CSS and Styling                                       | Complete   |
| Day 4 | Get Tables Working                                          | Complete   |
| Day 4 | Start rendering information about tax law                   | Complete   |
| Day 5 | MVP/Post MVP                                                | Complete   |
| Day 5 | Final Touches                                               | Complete   |
| Day 6 | Present                                                     | incomplete |

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Complete BackEnd with routes using Ruby and Rails
- Get BackEnd Deployed
- Allow User Login / Authorization to certain parts of site
- Allow User to Create their own tax profile that will be storted in db
  such as name, age, dependent, ect
- Have links that explain the basics of tax law

#### PostMVP

- Create tax table that will calculate tax
- Allow User to input their income and spit back their tax liability
- Include other credit that some may be eligible for

## Functional Components

- The absolute most functionial component hads to be the ability to clearly explain the basics of tax law
- Also, the page has to be resonsive that depends on what type of device the user is using
- Also, it has to present a clean and representation of my skill as a React and Rails developer

#### MVP

| \*  | Action                                                | Priority | Estimated Time | Actual Time Invetsted | Time |
| --- | ----------------------------------------------------- | :------: | :------------: | :-------------------: | :--: |
| 1   | Set Up Back End                                       |    H     |      -hrs      |          2hr          | -hrs |
| 2   | Configure Rails For HTTP Cookie                       |    H     |      -hrs      |          4hr          | -hrs |
| 3   | Create react app that allows basic user functionality |    H     |      -hrs      |          6hr          | -hrs |
| 4   |                                                       |    H     |      -hrs      |         60hr          | -hrs |
| 5   |                                                       |    H     |      -hrs      |         60hr          | -hrs |
| 6   |                                                       |    H     |      -hrs      |         60hr          | -hrs |
| 7   |                                                       |    H     |      -hrs      |         60hr          | -hrs |
| 8   |                                                       |    H     |      -hrs      |         60hr          | -hrs |
| 9   | API Data Render                                       |    H     |     10hrs      |          8hr          |  NA  |
| 10  | API Deployment                                        |    H     |     10hrs      |          8hr          |  NA  |
| 11  | User Login /Authentication                            |    H     |     10hrs      |          8hr          |  NA  |
| 12  | User CRUD function                                    |    H     |     10hrs      |          8hr          |  NA  |
| 13  | EXPLAIN TAXES CLEARLY                                 |    H     |     10hrs      |          8hr          |  NA  |
| 14  | API Data Render                                       |    H     |     10hrs      |          8hr          |  NA  |
| 15  | Skeleton HTML                                         |    H     |      3hr'      |          4hr          |  NA  |
| 16  | Skeleton CSS for Mobile                               |    H     |     3hrs '     |          5hr          |  NA  |
| 17  | Hamburger                                             |    H     |      1hr       |          3hr          |  NA  |
| 18  | Regular Nav                                           |    H     |      H '       |          3hr          |  NA  |
| 19  | Adding Form                                           |    H     |     3hr '      |          6hr          |  NA  |
| 20  | Other sections and flex                               |    M     |     4hr '      |          4hr          |  NA  |
|     | Responsive                                            |    H     |     3hr '      |          5hr          |  NA  |
|     | Social Media Icons                                    |    L     |     1hr '      |           -           |  NA  |
|     | Have KEY AND VALUE RENDER TOGETHER                    |    M     |     5hrs '     |          7hr          |  NA  |
|     | Styling                                               |    M     |     5hrs '     |          7hr          |  NA  |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |
|     | Total                                                 |    H     |      -hrs      |         60hr          | -hrs |

| React Components   |                                              Description                                               |
| ------------------ | :----------------------------------------------------------------------------------------------------: |
| App                |                                  Set Up App that allows Route Render                                   |
| About.js           |                       Acts as home page and give mission statement about LernTax                       |
| CalcTax            |               Hosts the algorithm that calculates taxes based on various filing statuses               |
| Credits            |                                    Info page that explains credits                                     |
| Dashboard          |                                   Acts as registration for new users                                   |
| DependentsCards    |                  Child of dependents and gives various examples of who is a dependent                  |
| Dependents         | Explains about who is dependent as well as a form that allows the user to see if they have a dependent |
| EditInormation     |                   Allows the user to edit their name, age, filing status, dependent                    |
| Footer             |                    footer and disclaimer that this app is not providing tax advice                     |
| Home               |                            acts as successful login page when login occurs                             |
| Login              |                                        allows user to login in                                         |
| Profile            |                       displays user info and allows onc click delete of profile                        |
| TaxInfo            |         allows user to enter their wq income, unemployment, self employment, and capital gains         |
| TaxRates           |                   describes the difference between marginal and effective tax rates                    |
| CalcTaxForm        |                                  form for user input to calculate tax                                  |
| LoginForm          |                                     form that is child of Login.js                                     |
| Registration       |                                    allows user to enter information                                    |
| TaxInfoForm        |                                       form and child of TaxInfo                                        |
| AGI                |                                              explains AGI                                              |
| GrossTaxableIncome |                                        explains what income is                                         |
| ItemizedDeductions |                                      explains itemized deductions                                      |
| StandardDeductions |                                      explains standard deductions                                      |
| TaxList            |                               goes over various steps to calculate taxes                               |

#### PostMVP

| Component              | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------------- | :------: | :------------: | :------------: | :---------: |
| Add Tax Tables         |    L     |      5hr       |      -hr       |     -hr     |
| Calculate Taxes        |    L     |      1hr       |      -hr       |     -hr     |
| Interactive Everywhere |    M     |      4hr       |      -hr       |     -hr     |
| Materialize            |    H     |      4hr       |      -hr       |     -hr     |
| Bootstrap              |    H     |      4hr       |      -hr       |     -hr     |

| Total | H | 20hrs | -hrs | -hrs |

## Additional Libraries

React BootStrap, bcrypt, Ruby, Rails, http cookie

## Code Snippet

code snippet most proud of:

```
const data = {
    single: {
      bracket1: {
        bracketTop: 9701,
        taxRate: 0.1,
        prevTax: null,
      },
      bracket2: {
        bracketTop: 39476,
        taxRate: 0.12,
        prevTax: 970,
      },
      bracket3: {
        bracketTop: 84201,
        taxRate: 0.22,
        prevTax: 4543,
      },
      bracket4: {
        bracketTop: 100001,
        taxRate: 0.24,
        prevTax: 14383,
      },
      bracket5: {
        bracketTop: 160725,
        taxRate: 0.24,
        prevTax: 5826,
      },
      bracket6: {
        bracketTop: 204100,
        taxRate: 0.32,
        prevTax: 18684,
      },
      bracket7: {
        bracketTop: 510300,
        taxRate: 0.35,
        prevTax: 24807,
      },
      bracket8: {
        bracketTop: null,
        taxRate: 0.37,
        prevTax: 35013,
      },
    },
    if (standardDeduction === "Single $12,200") {
      parsedStandardDeduction = 12200;
      let taxInVar =
        parsedW2 + parsedAdd - parseAdjustments - parsedStandardDeduction;
      if (taxInVar < 0) {
        setTaxableIncome(0);
      } else if (taxInVar < data.single.bracket1.bracketTop) {
        setTaxableIncome(taxInVar);
        parsedTL = taxInVar * data.single.bracket1.taxRate;
        setEffectiveRate(`${((parsedTL / taxInVar) * 100).toFixed(2)}%`);
        setMarginalRate(`${data.single.bracket1.taxRate * 100}%`);
      } else if (taxInVar < data.single.bracket2.bracketTop) {
        setTaxableIncome(taxInVar);
        let temp = taxInVar - data.single.bracket1.bracketTop;
        parsedTL =
          data.single.bracket2.prevTax + temp * data.single.bracket2.taxRate;
        setEffectiveRate(`${((parsedTL / taxInVar) * 100).toFixed(2)}%`);
        setMarginalRate(`${data.single.bracket2.taxRate * 100}%`);
      } else if (taxInVar < data.single.bracket3.bracketTop) {
        setTaxableIncome(taxInVar);
        let temp = taxInVar - data.single.bracket2.bracketTop;
        parsedTL =
          data.single.bracket3.prevTax + temp * data.single.bracket3.taxRate;
        setEffectiveRate(`${((parsedTL / taxInVar) * 100).toFixed(2)}%`);
        setMarginalRate(`${data.single.bracket3.taxRate * 100}%`);
      } else if (taxInVar < data.single.bracket4.bracketTop) {
        setTaxableIncome(taxInVar);
        let temp = taxInVar - data.single.bracket3.bracketTop;
        parsedTL =
          data.single.bracket4.prevTax + temp * data.single.bracket4.taxRate;
        setEffectiveRate(`${((parsedTL / taxInVar) * 100).toFixed(2)}%`);
        setMarginalRate(`${data.single.bracket4.taxRate * 100}%`);
      } else if (taxInVar < data.single.bracket5.bracketTop) {
        setTaxableIncome(taxInVar);
        parsedTL =
          taxInVar * data.single.bracket5.taxRate -
          data.single.bracket5.prevTax;
        setEffectiveRate(`${((parsedTL / taxInVar) * 100).toFixed(2)}%`);
        setMarginalRate(`${data.single.bracket5.taxRate * 100}%`);
      } else if (taxInVar < data.single.bracket6.bracketTop) {
        setTaxableIncome(taxInVar);
        parsedTL =
          taxInVar * data.single.bracket6.taxRate -
          data.single.bracket6.prevTax;
        setEffectiveRate(`${((parsedTL / taxInVar) * 100).toFixed(2)}%`);
        setMarginalRate(`${data.single.bracket6.taxRate * 100}%`);
      } else if (taxInVar < data.single.bracket7.bracketTop) {
        setTaxableIncome(taxInVar);
        parsedTL =
          taxInVar * data.single.bracket7.taxRate -
          data.single.bracket7.prevTax;
        setEffectiveRate(`${((parsedTL / taxInVar) * 100).toFixed(2)}%`);
        setMarginalRate(`${data.single.bracket7.taxRate * 100}%`);
      } else {
        setTaxableIncome(taxInVar);
        parsedTL =
          taxInVar * data.single.bracket8.taxRate -
          data.single.bracket8.prevTax;
        setEffectiveRate(`${((parsedTL / taxInVar) * 100).toFixed(2)}%`);
        setMarginalRate(`${data.single.bracket8.taxRate * 100}%`);
      }
    }

```

I made an algorithm that would calculate a taxpayers tax liability by deciphering IRS tax tables. There are three other filing statuses that have the similar algorithm.
[IRSTaxTable](https://www.irs.gov/pub/irs-pdf/i1040tt.pdf)

## Issues and Resolutions

- 1
  **ERROR**:
  I was able to successfully allow user login by setting an http cookie locally, however, when I went to deploy both the front and back end, the front end gave a continuous error that chrome and other browers would not allow cross site cookies:

```
A cookie associated with a cross-site resource at http://localhost/ was set without the `SameSite` attribute. It has been blocked, as Chrome now only delivers cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
```

**RESOLUTION**:
With major help from Andrew Culhane, I was able to purchase a domain from Squarespace and have my backend hosted there (origin on Heroku). I then got an SSL and was able to allow user login and all the functionality my app required.

Check out Andrew's github [here](http://github.com/drewculhane)

- 2
  **ERROR**:
  When creating my backend, I set an http cookie which allow refresh functionality without losing user information. I did this creating a user concern that included all the user information. However, I needed to include ALL the models associated with the user. Therefore, in the concern and in the users controller I had to add the following code to allow this to happen:

**RESOLUTION**:

```
#USER CONTROLLER

def index
        @users = User.all
        #render json: @users.to_json(include: :information)
        render json: @users.to_json(:include => [:information => {:include => :tax_information}])
    end

#USER CONCERN

module CurrentUserConcern
    extend ActiveSupport::Concern
    included do
        before_action :set_current_user
    end

    def set_current_user
        if session[:user_id]
        @current_user = User.find(session[:user_id]).as_json(:include => [:information => {:include => :tax_information}])
        end
    end
end

```

## Project Retrospective

- After spending close to 100 hours working on the project, it came clear to me that I have enough knowledge of Javascript and the tax code to make my own TurboTax application. If I knew that I could do this from the beginning, I think I would have adapted the user models to include all taxpayer information that is needed to create a basic tax return.
