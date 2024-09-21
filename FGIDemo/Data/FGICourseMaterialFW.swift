import Foundation

struct CourseFramework: Hashable, Identifiable {
    let id = UUID()
    let name: String // Lesson Number
    let topic: String // Lesson Topic
    let urlString: String // URL To FGI's Webpage on the specific lesson
    let significance: String // Brief overview of why this is a crucial part to financial literary
    let lessonSymbol: String // An SF Symbol used to represent this Lesson
}

struct CourseMaterials {
    static let sampleCourse = CourseFramework(name: "Lesson 1",
                                        topic: "Personal Finance",
                                        urlString: "https://sites.google.com/view/fgistudent/curriculum/1-personal-finance?authuser=0",
                                        significance: "Knowing how to manage money is crucial to be able to deal with financial challenges, opportunities, and how to be responsible with your money. Not being aware of fees, budgeting, and credit scores can cause headaches, stressors, and money wasted later on down the line. ",
                                        lessonSymbol: "dollarsign.circle")
    
    static let courses: [CourseFramework] = [
        CourseFramework(name: "Lesson 1",
                  topic: "Personal Finance",
                  urlString: "https://sites.google.com/view/fgistudent/curriculum/1-personal-finance",
                        significance: "Knowing how to manage money is crucial to be able to deal with financial challenges, opportunities, and how to be responsible with your money. Not being aware of fees, budgeting, and credit scores can cause headaches, stressors, and money wasted later on down the line. ", lessonSymbol: "dollarsign.circle"),
        
        CourseFramework(name: "Lesson 2",
                  topic: "What is A Stock?",
                  urlString: "https://sites.google.com/view/fgistudent/curriculum/2-what-is-a-stock",
                        significance: "Stocks help people invest and grow their money. They give companies money now to grow their business. As a company grows, all shareholders (or people involved) can make money.", lessonSymbol: "banknote"),
        
        CourseFramework(name: "Lesson 3", 
                  topic: "Volatility and Diversification",
                  urlString: "https://sites.google.com/view/fgistudent/curriculum/3-volatility-and-diversification",
                        significance: "Knowing about volatility helps you better understand what investments or stocks are stable, so that you can make more informed and less spontaneous investments. Diversification ensures that your money is in different places so you don't lose it all if one area is doing poorly.",
                        lessonSymbol: "creditcard"),
        
        CourseFramework(name: "Lesson 4",
                  topic: "What is a bond?",
                  urlString: "https://sites.google.com/view/fgistudent/curriculum/4-what-is-a-bond",
                  significance: "Similar to stocks, bonds allow people to invest and grow their money. While bonds have smaller returns than stocks, they are more stable and predictable investments. Knowing about interest is important because people often forget about it or to take it into account. The lender expects you to pay them the amount you borrowed PLUS some extra which can accumulate and grow to be very large over the years.",
                       lessonSymbol: "bitcoinsign.circle"),
        
        CourseFramework(name: "Lesson 5",
                  topic: "Mutual Funds / ETFs", 
                  urlString: "https://sites.google.com/view/fgistudent/curriculum/5-mutual-fundsetfs",
                  significance: "Investors are able to own a share of a portfolio, not the actual stocks. →  Mutual funds and ETFs enable investors to invest in many stocks, diversifying their portfolios and decreasing risks.",
                       lessonSymbol: "dollarsign.square.fill"),
        
        CourseFramework(name: "Lesson 6",
                  topic: "Compound Interest / Dollar-Cost Averaging", 
                  urlString: "https://sites.google.com/view/fgistudent/curriculum/6-compound-interest-and-dca",
                        significance: "Keeping your money invested and reinvesting your interest is the best way to build long-term wealth because it enables you to experience compound interest (or multiplied interest). Dollar cost averaging matters because it gives an investor the choice to divide up total amounts to be invested across periodic purchases, you invest the same amount of money yearly regardless of changes in the stock market. Helps fight short-term volatility in the market.",
                        lessonSymbol: "chart.line.uptrend.xyaxis"),
        
        CourseFramework(name: "Lesson 7",
                  topic: "Personal Finance II",
                  urlString: "https://sites.google.com/view/fgistudent/curriculum/7-personal-finance-2-0",
                  significance: "Knowing how to manage money is crucial to be able to deal with financial challenges, opportunities, and how to be responsible with your money. Businesses, taxes, 401k, roth IRA, and mortgages are important things to be aware of to be able to acquire, keep, and make your money work for you.",
                        lessonSymbol: "arrow.up.right.circle"),
        
        CourseFramework(name: "Capstone Project",
                  topic: "Cumulative Final Project",
                  urlString: "https://sites.google.com/view/fgistudent/curriculum/capstone-project",
                        significance: "Congratulations on all of your hard work to date! In order to complete the course and receive the $100 investment, the FGI capstone project must be completed. This project serves to measure what you learned throughout your experience in the FGI program!",
                        lessonSymbol: "pencil.and.ruler"),
        
        CourseFramework(name: "More Financial Topics",
                  topic: "More Topics and Terms!",
                  urlString: "https://sites.google.com/view/fgistudent/more-financial-topics",
                        significance: "FGI only scratches the surface in terms of investment and personal finance knowledge. For more content related to the lesson topics, scroll to the bottom of that lesson's page. Below are terms not touched on in our curriculum, books to check out, and other resources worth looking into.", 
                        lessonSymbol: "dollarsign.circle.fill")
    ]
}
