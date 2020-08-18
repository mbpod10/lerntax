import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const ItemizedDeductions = () => {
  return (
    <>
      <h1>Itemized Deductions</h1>
      <a href="https://www.irs.gov/pub/irs-pdf/f1040sa.pdf">Schedule A</a>

      <p>
        Some taxpayers, usually homeowners, opt to take Itemized Deductions
        instead of the Standard Deduction. Since the Tax And Jobs Act of 2017,
        fewer people itemized because of the increased standard deduction as
        well as the cap on state and local tax deductions. Itemized deductions
        are calculated on Schedule A and have various sections. Let's take a
        look.
        <b>
          <i>
            Note: when doing your taxes, you can only take the standard
            deduction or the itemized deduction, not both.
          </i>
        </b>
      </p>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Header>
            Section 1: Medical and Dental Expenses
          </ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                This is the section that takes into account unreimbursable
                medical expenses. So if you paid for your medical expenses with
                an HSA or any equivalent, do not include those expenses in the
                calculation.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 1: Total Unreimbursable Medical Expenses: Schedule A, Line 1
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                You want to add all unreimbursable expenses and insert it on
                Schedule A, line 1. Such expenses include dental insurance,
                health insurance (not through employer), prescriptions ect{" "}
                <i>that were not reimbursed.</i>
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 2: Enter amount from Form 1040 line 8b: Schedule A, Line 2
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                You want your <i>Adjusted Gross Income</i> on this line. Make
                sure it is your AGI and not your taxable income.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 3: Multiply Line 2 by 7.5% Schedule A, Line 3
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p>Simply multiply your AGI by 7.5%</p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 4: Subtract Line 3 From Line 1
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                Tax law states that anything above 7.5% of you gross income
                could qualify as a itemized deduction. In other words, if you
                had $100,000 in AGI, you would need over $7,500 in
                unreimbursable medical expenses. Even then, the deductible
                portion would only be in excess of $7,500. Therefore, in the
                above example, one who had $7,501 in unreimbursable medical
                expenses would only be allow to deduct $1.
              </p>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Header>
            Section 2: Taxes You Paid (State And Local Taxes)
          </ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                This is the section that has caused a lot of political debate as
                some homeowners in high property taxed states are unable to
                fully deduct what they pay in real estate tax and state income
                taxes due to the Tax Cuts And Jobs Act of 2017. However, this
                section allow you take itemized deductions based on state taxes
                you pay during the year.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 5a: State Income Tax OR State Sales Tax
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                In this section, taxpayers have the option to choose to deduct
                general sales tax OR state income tax. Instead of state and
                local income taxes paid, individual taxpayers may choose to
                deduct state and local general sales taxes. In most cases,
                taxpayers opt to deduct their state and local income taxes. You
                can find this tax on your W-2, line 17. Taxpayers with multiple
                W-2s may add state income taxes as a result to their deduction.
                Moreover, some local municipalities apply an income tax. For
                example, taxpayers living in Philadelphia pay a local income tax
                and that tax would be found on W-2, line 19.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 5b: State And Local Real Estate Taxes
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                In some states, homeowners have to pay real estate taxes to
                their respective state municipalities. This tax can usually be
                found on 1098-Mortgage Interest Statement, or online to your
                local municipality website.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 5c: State And Local Personal Propery Tax
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p>
                A personal property tax is similar to a real estate tax, except
                that it is imposed on personal property. Examples of personal
                property are clothing, jewelry, cameras, and automobiles. The
                most common personal property tax is the tax certain states
                impose annually on the value of automobiles and other vehicles
                registered in the state.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 5d: Add Line 5a Through 5c
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                Add the entries from line 5a through 5c
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 5e: Enter The Smaller Amount of Line 5d or $10,000
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                This is where the controversy comes in. A taxpayer may only
                deduct at a cap of $10,000 of their total state and local taxes.
                So if a taxpayer in New Jersey pays $10,500 in state income tax
                and $14,000 in real estate tax, he or she may only be allowed to
                deduct $10,000 as $10,000 is the smaller of $24,000 and $10,000.
              </p>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Header>
              Section 3: Interest You Paid
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                In general, this section allows a homeowner to deduct all the
                mortgage interest he or she paid throughout the year. There is
                no cap and therefore a taxpayer who pays $14,000 in mortgage
                interest throughout the year may take this as an itemized
                deduction.
              </p>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Header>
              Section 4: Gifts To Charity
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                Barring some special situations, all donations made to a{" "}
                <i>Qualified charitable organization</i> are fully tax
                deductible. Some examples include religious organizations, most
                nonprofit charitable organizations, schools, museums, hospitals,
                medical research organizations, volunteer fire companies, civil
                defense organizations, war veterans’ groups, the US governemnt
                and other municipalities, and certain cemeteries and fraternal
                organizations.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 11: Gifts By Cash or Check
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                This is pretty self-explainatory. All contributions to
                charitable organizations are deductible. However, the taxpayer
                needs documented evidence of these donations. Moreover, any
                donations of over $250 need to have written substantiation from
                the donee organization. In other words, if a taxpayer donates
                $10 to a religious 25 times, the taxpayer only needs record of
                the donation. If another taxpayer makes one contribution of
                $250, the taxpayer needs a letter from the organization
                substantiating the donation.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 12: Other Donations Not Made By Cash or Check
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                Such donations are in the form of volunteer work and property
                donations. Volunteer deductions are generally classified as
                out-of-pocket expenses while volunteering. Peronsal property
                donations are different in that if the taxpayer did not hold
                onto the asset for one year, the cost of acquiring the property
                is deductible. If it was held for more than one year, the value
                at the time of the donation is deductible. As an example, two
                taxpayers acquire stock in ABC worth $1,000. Taxpayer A held
                onto the stock for more than one year and when donates the stock
                it is worth $2,000 and may deduct the full $2,000. Taxpayer B
                did not wait a whole year and therefore can only take a $1,000
                deduction despite being valued at $2,000 at the time of the
                donations.
              </p>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
    </>
  );
};

export default ItemizedDeductions;
