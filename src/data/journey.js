// Each entry is one chapter in the "My Journey" series on TechSphere.
// content is an array of { heading, paragraphs } sections — this lets each
// chapter carry real subsections (e.g. "The Pitch", "The Deadlines",
// "What I'd Tell You") instead of one long wall of text.
//
// Fill in `content` when the chapter is written. Until then, the chapter
// shows on the homepage and Journey timeline with a "coming soon" state.

export const journeyEntries = [
  {
    id: 1,
    slug: "100-level",
    era: "100 Level",
    title: "Where It All Started",
    excerpt:
      "No roadmap, no mentors, no idea what I'd signed up for. This is where the confusion — and the beginning — happened.",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1000&q=80",
    date: "",
    readTime: "",
    content: [],
  },
    {
    id: 2,
    slug: "200-level",
    era: "200 Level",
    title: "Learning to Actually Code",
    excerpt:
      "Between coursework and confusion, this is the year I started teaching myself to code for real — outside the syllabus.",
    image:
      "https://images.unsplash.com/photo-1763568258239-d3b5c95019af?w=1000&q=80",
    date: "",
    readTime: "",
    content: [
      {
        heading: "",
        paragraphs: [
          "This chapter is where the theory started turning into things I actually built — real projects, real bugs, real debugging. Below are the individual builds, documented honestly as they happened.",
        ],
      },
    ],
    projects: [
      {
        slug: "ai-image-detector",
        title: "Building an AI Image Detector: What the Tutorial Didn't Show You",
        excerpt:
          "A CNN that tells real images from AI-generated ones — and the two days of environment chaos and a sneaky bug that came before it worked.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80",
        date: "August 14, 2026",
        readTime: "8 min",
        content: [
          {
            heading: "The Setup: More Fighting Than Coding",
            paragraphs: [
              "I found a TikTok tutorial walking through a CNN that classifies images as real or AI-generated, and I thought: this is a clean, well-scoped project I can actually finish and add to my portfolio. Balanced dataset, small images, a clear architecture explained step by step. Perfect.",
              "It was clean. Right up until it wasn't.",
              "I wanted this project on my own laptop with Jupyter Notebook, not Colab. That decision cost me hours before I wrote a single line of model code. First, pip couldn't decide on a Keras version my first install attempt cycled through twenty-something versions trying to satisfy every dependency at once, then gave up entirely.",
              "Then my internet connection picked that exact day to be genuinely unstable. TensorFlow is a ~350MB file, and pip does not handle a connection that drops every few minutes gracefully. I watched a progress bar estimate 18 hours remaining at one point, then lost the download entirely to a corrupted temp file Windows wouldn't let go of.",
              "The fix ended up being almost embarrassingly manual: downloading the wheel file directly through my browser instead of pip, since browsers resume interrupted downloads far more gracefully. I even grabbed the wrong Python version on my first try, wasting another 350MB on a struggling connection because I didn't check the filename closely enough.",
              "Lesson: check the filename twice before you commit a slow connection to it.",
            ],
          },
          {
            heading: "The Data Was Fine. My Pipeline Was Not.",
            paragraphs: [
              "Once the environment was working, the actual model code came together fast loading images, setting explicit class order, normalizing pixels, adding augmentation, building a three-block CNN. My model summary showed 93,377 trainable parameters, an exact match to the tutorial, which felt like a good sign.",
              "Then I started training, and nothing happened. Not \"trained badly\" nothing. Loss sat frozen for seven straight epochs. Validation recall was a perfect 1.0, which sounds great until you realize what it meant: the model had learned to predict \"FAKE\" for every single image, all the time.",
              "Debugging this taught me more than the architecture did. I checked the label balance first fine. Then I checked the actual pixel values feeding into the model, and that's where it broke: pixels ranged from 0.0 to 0.0039, not 0.0 to 1.0. That number is suspiciously exact — it's 1/255. My normalization step had run twice, shrinking every pixel value down to almost nothing.",
              "I assumed restarting the kernel would fix it. It didn't, at first — the notebook's cell execution counter never actually reset, meaning the old broken data was still sitting in memory even though I thought I'd restarted. Once I confirmed a genuine clean restart, the pixel range finally showed correctly, and the model started learning immediately.",
              "If your loss gets stuck and refuses to move, don't touch the model architecture first. Check your data pipeline. A model that can't learn at all is almost always being fed something wrong, not built wrong.",
            ],
          },
          {
            heading: "The Results, and What I Actually Learned",
            paragraphs: [
              "With the bug fixed, training looked completely different. Final test accuracy came out to 90.91%, with an AUC of 0.9747 about 3 points higher on accuracy than the original tutorial, and an AUC essentially identical to it. The model shows the same behavior the tutorial described: it would rather flag a real image as fake than let an AI-generated one slip through, catching 95% of AI-generated images while being a bit more cautious with real ones.",
              "What I actually walked away with wasn't the CNN architecture that part was almost the easy part once the environment and data were sorted. It was this: a broken training run that produces no errors is still broken, so watch your metrics, not just whether the code runs. Kernel state in Jupyter is not intuitive, and \"restart and run all\" should be a reflex the moment results look wrong. And debugging methodically checking the data pipeline first, one layer at a time beats randomly changing hyperparameters and hoping.",
              "The finished project, including the notebook, saved model, and training curves, is live on my GitHub. If you're working through something similar and hit a wall that doesn't look like the tutorial's wall, that's not a sign you're doing it wrong. It's usually just the part they didn't film.",
            ],
          },
        ],
      },
            {
        slug: "loan-default-predictor",
        title: "The Loan Default Predictor I Never Documented in Real Time",
        excerpt:
          "XGBoost, SMOTE, and a Plotly Dash dashboard — the technical story of a project I finished before I started keeping receipts.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80",
        date: "August 14, 2026",
        readTime: "5 min",
        content: [
          {
            heading: "A Confession Before This Starts",
            paragraphs: [
              "I built this project before I started writing things down as they happened. So this post isn't going to have the blow-by-blow of what broke and when — I genuinely don't remember the exact moments I wanted to close the laptop, the specific error messages, or how long each fix took. What I do remember is the shape of what I built and the decisions behind it, so that's what this is: a technical walkthrough rather than a real-time debugging log.",
              "Every project after this one gets documented as it happens. This is the last one that gets written from memory instead of from notes.",
            ],
          },
          {
            heading: "The Problem and the Data",
            paragraphs: [
              "This was my first independent portfolio project — no internship structure, no assignment brief, just me picking a real problem and building the whole thing myself. Loan default prediction is a classic binary classification problem: given information about a borrower and a loan, predict whether they'll default.",
              "Like most real-world classification problems involving defaults or fraud, the classes weren't balanced — most loans don't default. That imbalance shapes almost every decision that comes after it, from which metrics actually mean anything to how you prepare the training data.",
            ],
          },
          {
            heading: "The Technical Approach",
            paragraphs: [
              "I used SMOTE (Synthetic Minority Oversampling Technique) to address the class imbalance before training, the same approach I'd lean on again later for fraud detection — generating synthetic examples of the minority class rather than just duplicating existing ones, so the model doesn't overfit to a handful of repeated cases.",
              "For the model itself, I went with XGBoost rather than a simpler baseline — it tends to perform well on structured, tabular data like this, and handles the kind of nonlinear relationships and feature interactions that a loan dataset usually has (income relative to loan amount, credit history combined with employment length, that sort of thing).",
              "Instead of stopping at a notebook with printed metrics, I built the results into an interactive Plotly Dash app — giving the model an actual interface rather than just a static evaluation cell. That meant thinking about this less like a one-off analysis and more like a small product: what would someone actually want to explore about a prediction, not just what number proves the model works.",
            ],
          },
          {
            heading: "What I'd Do Differently",
            paragraphs: [
              "Mainly: write things down while they're happening, not after. I know there were setup snags and moments of frustration in building this — I built an entire interactive dashboard from scratch as a first independent project, there's no version of that which was friction-free — but without notes from the time, I can't respectfully claim details I'm not sure of.",
              "The code and the working dashboard are on my GitHub. The technical decisions in this post are accurate. The war story just isn't fully told, and I'd rather admit that than invent one.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "aws-sbgl-opportunity",
    era: "AWS SBGL",
    title: "The AWS Student Builder Group Opportunity",
    excerpt:
      "From the idea, to the pitch, to becoming a Group Leader the full story of how this opportunity found me and what it's taken to hold it.",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1000&q=80",
    date: "",
    readTime: "",
    content: [],
  },
  {
    id: 4,
    slug: "300-level",
    era: "300 Level",
    title: "Going Deeper",
    excerpt:
      "Third year, higher stakes, and finally starting to feel like I know what I'm building toward.",
    image:
      "https://images.unsplash.com/photo-1675120070126-76e33dd09e01?w=1000&q=80",
    date: "",
    readTime: "",
    content: [],
  },
  {
    id: 5,
    slug: "internships",
    era: "Internships",
    title: "Learning On the Job",
    excerpt:
      "What actual internships taught me that no classroom could: the wins, the mistakes, and the growth.",
    image:
      "https://images.unsplash.com/photo-1678728245335-244ffd160d54?w=1000&q=80",
    date: "",
    readTime: "",
    content: [
      {
        heading: "",
        paragraphs: [
          "Internships taught me things no classroom assignment could — how to work without a syllabus telling you exactly what's expected, how to make real decisions on real (or realistic) data, and how to keep going when a project doesn't have a clean answer key. Below, organized by company, are the individual projects I built during each one.",
        ],
      },
    ],
        companies: [
      {
        slug: "decodelabs",
        name: "DecodeLabs",
        excerpt:
          "A remote Data Science internship — two real projects, and an honest account of an experience that fell short of what was promised.",
        image: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?w=1000&q=80",
        badgeColor: "#7C3AED",
        content: [
          {
            heading: "My Experience With DecodeLabs",
            paragraphs: [
              "I want to be upfront about this one, because I think it matters as much as the projects themselves: this internship was not a good experience. I was given a list of tasks with no real walkthrough, no mentorship, and no one checking in to see whether I actually understood what I was building, I was navigating data science largely on my own, as someone still new to the field. When it came time to receive my certificate and letter of recognition, I was asked to pay for them, which was never mentioned upfront and felt completely unreasonable given how little support I'd received along the way.",
              "I'm including that here because TechSphere is meant to be an honest record of my journey, not just a highlight reel, and not every opportunity that looks good on paper turns out to be a good one. The two projects below are real, and I'm proud of what I built. But I built them mostly by figuring it out myself, not because of anything DecodeLabs taught me directly.",
            ],
          },
        ],
        projects: [
          {
            slug: "eda-feature-engineering",
            title: "Cleaning and Preparing Data: The Titanic Dataset",
            excerpt:
              "Before any model can make predictions, someone has to clean and prepare the data first. Here's what that actually looks like, explained simply.",
            image: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?w=1000&q=80",
            badgeColor: "#8B5CF6",
            date: "August 14, 2026",
            readTime: "5 min",
            content: [
              {
                heading: "What This Project Was About",
                paragraphs: [
                  "Before you can teach a computer to predict anything, you have to hand it data it can actually learn from — and real-world data is almost never ready to use straight out of the box. It has gaps, weird extreme values, and information written in a way computers can't naturally understand. This project was about taking messy, real data and turning it into something a machine learning model could actually work with.",
                  "I used the Titanic passenger dataset which is a well-known dataset in data science that lists information about the people on board the Titanic, including things like their age, ticket class, how much they paid, and whether they survived. It's popular for learning exactly because it's small, real, and just messy enough to be useful.",
                ],
              },
              {
                heading: "Step 1: Dealing With Missing Information",
                paragraphs: [
                  "Some passengers in the dataset are missing information maybe their age was never recorded, for example. You can't just leave blanks, because most models can't handle empty values at all. But you also can't fill every blank the same way, because how much information is missing changes what the 'right' fix is.",
                  "So I used a simple rule of thumb: if only a small number of entries were missing something (under 5%), I removed just those rows, since losing a handful of rows barely affects the overall data. If a moderate amount was missing (5–20%), I filled the gaps in with a sensible average value instead of guessing randomly. And if a lot was missing (over 20%), I used a smarter technique that looks at similar passengers and estimates a reasonable value based on that similarity, rather than a single blanket guess.",
                ],
              },
              {
                heading: "Step 2: Taming Extreme Values",
                paragraphs: [
                  "Every dataset has outliers; a handful of values that are wildly different from everything else, like one passenger who paid far more for their ticket than everyone else. Extreme values like that can confuse a model, making it think that kind of value is more 'normal' or important than it really is.",
                  "Instead of just deleting those rows (which would also throw away all the other useful information about that same passenger), I capped extreme values at a reasonable upper and lower limit so a wildly high number gets pulled down to something more reasonable, without losing the rest of that person's data.",
                ],
              },
              {
                heading: "Step 3: Creating New, More Useful Information",
                paragraphs: [
                  "Sometimes the most useful information isn't sitting directly in the raw data you have to create it yourself by combining existing columns in smarter ways. For example, instead of just knowing how many siblings and parents a passenger had listed separately, I combined those into one 'family size' number, and then created a simple yes/no flag for whether someone was traveling completely alone since travelling alone versus with family turned out to matter a lot for survival patterns.",
                  "I did this five times over, creating new pieces of information that weren't obvious in the original columns but that made real intuitive sense like the fare each person effectively paid per family member, or grouping ages into bands like 'child,' 'adult,' and 'senior' instead of using raw age numbers.",
                ],
              },
              {
                heading: "Step 4: Translating Categories Into Numbers",
                paragraphs: [
                  "Computers work with numbers, not words so a column like 'ticket class' (which might say 'First,' 'Second,' or 'Third') needs to become something numeric. The naive way to do this is to just assign 1, 2, and 3 — but that accidentally tells the model 'Third is three times as much as First,' which isn't a meaningful relationship. Instead, I used a technique that turns each category into its own separate yes/no column, so the model treats them as genuinely different groups rather than points on a scale that doesn't really exist.",
                ],
              },
              {
                heading: "Step 5: Removing Redundant Information",
                paragraphs: [
                  "Last, I checked whether any of my new columns were basically saying the same thing as each other if two pieces of information are almost perfectly correlated, keeping both doesn't help the model, it just adds noise and confusion. So I measured how strongly every pair of features related to each other, and wherever two were extremely similar, I kept the more useful one and dropped the redundant one.",
                  "By the end, the dataset had grown from 8 raw, messy columns to 18 clean, genuinely useful ones ready to actually be used by a machine learning model.",
                ],
              },
            ],
          },
          {
            slug: "fraud-detection",
            title: "Catching Fraud When It's Only 2% of the Data",
            excerpt:
              "How do you teach a computer to spot something rare and why 'high accuracy' can secretly mean the model learned nothing at all?",
            image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1000&q=80",
            badgeColor: "#8B5CF6",
            date: "August 14, 2026",
            readTime: "6 min",
            content: [
              {
                heading: "The Problem, Explained Simply",
                paragraphs: [
                  "Imagine a bank wants a computer program that can look at a transaction and flag it if it looks like fraud. Sounds straightforward until you look at the data and realize about 98 out of every 100 transactions are completely normal, and only about 2 are actually fraud. That imbalance sounds like a small detail, but it quietly breaks the most obvious approach to solving the problem.",
                  "Here's why: if a model just guesses 'not fraud' every single time, it would be right 98% of the time a number that sounds excellent on paper. But it would catch zero fraud, ever. It would be a completely useless model wearing an impressive-looking score. Realizing that 'high accuracy' can secretly mean 'the model learned nothing at all' was the most important lesson of this whole project.",
                ],
              },
              {
                heading: "Teaching the Model About the Rare Case",
                paragraphs: [
                  "Since real fraud examples were so rare, the model didn't get enough of them to actually learn the pattern. So I used a technique called SMOTE, which stands for Synthetic Minority Oversampling Technique in plain terms, it looks at the real fraud examples that do exist and generates new, realistic-looking synthetic examples based on the patterns between them, rather than just copying the same few fraud cases over and over. That gives the model enough varied examples of fraud to actually learn what it tends to look like.",
                  "A subtle but important detail: I made sure this synthetic data generation only ever touched the training data, never the data used to test how well the model actually performed otherwise I'd be testing the model on data it basically already knew the answer to, which would make the results lie to me.",
                ],
              },
              {
                heading: "Building and Comparing Two Different Models",
                paragraphs: [
                  "I trained two different kinds of models on this problem to see how they'd compare: Logistic Regression, a simpler, more traditional approach, and Random Forest, which builds many small decision trees and combines their votes.",
                  "The two ended up telling very different stories. Logistic Regression cast a wide net — it correctly caught 80% of actual fraud cases, but along the way it also incorrectly flagged a lot of legitimate transactions as suspicious. Random Forest was the opposite: when it flagged something as fraud, it was right 94% of the time, but it was more conservative overall and ended up missing more fraud cases than Logistic Regression did.",
                  "Neither one is simply 'better' in a vacuum it depends what mistake is more expensive for the business. Missing real fraud costs money directly. Falsely accusing a legitimate customer costs trust and annoys real customers. Random Forest ultimately scored highest by the overall measure I used to compare them (ROC-AUC, a way of scoring how well a model separates the two classes across every possible decision threshold), coming in at 0.9849 out of a possible 1.0.",
                ],
              },
              {
                heading: "Why I Didn't Just Trust 'Accuracy'",
                paragraphs: [
                  "Given everything above, I deliberately left plain accuracy out of how I judged these models for a problem this imbalanced, accuracy is actively misleading rather than just unhelpful. Instead, I judged them on precision (when the model says 'fraud,' how often is it actually right), recall (out of all the real fraud, how much did it actually catch), and that ROC-AUC score. Those three together tell a far more honest story than one clean-looking accuracy percentage ever could.",
                ],
              },
            ],
          },
        ],
      },
            {
        slug: "codealpha",
        name: "CodeAlpha",
        excerpt:
          "A Data Science internship covering classification, exploratory analysis, and regression three real projects, and another disappointing hands-off experience.",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1000&q=80",
        badgeColor: "#0EA5E9",
        content: [
          {
            heading: "My Experience With CodeAlpha",
            paragraphs: [
              "Similar to DecodeLabs, this internship handed me a list of tasks and left me to figure out data science mostly on my own no real walkthrough, no one checking whether I actually understood the concepts I was applying, and at the end, another request for payment before I could receive my certificate and letter of recognition. That pattern across two separate 'internships' taught me something important: a polished internship program name doesn't automatically mean real mentorship or support is behind it.",
              "The three projects below are genuinely mine, built by teaching myself the concepts as I went. I'm proud of the results I just want to be honest that the credit for actually learning this material belongs to persistence and outside resources, not to CodeAlpha itself.",
            ],
          },
        ],
        projects: [
          {
            slug: "iris-flower-classification",
            title: "Teaching a Computer to Identify Flowers by Measurement",
            excerpt:
              "Three flower species, four measurements each how a simple 'look at your neighbors' idea can classify almost perfectly.",
            image:
              "https://images.unsplash.com/photo-1752092416175-ff5345c1cbfc?w=1000&q=80",
            badgeColor: "#0284C7",
            date: "August 14, 2026",
            readTime: "4 min",
            content: [
              {
                heading: "The Problem",
                paragraphs: [
                  "This project used a classic dataset in machine learning: 150 iris flowers, split evenly across three species Setosa, Versicolor, and Virginica — with four measurements recorded for each one: sepal length, sepal width, petal length, and petal width. The goal was to build a model that could look at those four numbers for a flower it had never seen before and correctly guess which species it belonged to.",
                ],
              },
              {
                heading: "The Idea Behind the Model",
                paragraphs: [
                  "I used an algorithm called K-Nearest Neighbors, or KNN and the idea behind it is genuinely one of the most intuitive in all of machine learning. Imagine plotting every flower as a point in space based on its measurements. To classify a brand new flower, the model just looks at the 'K' closest existing points to it (say, the 5 nearest flowers already correctly labeled) and takes a majority vote whichever species shows up most among those nearby neighbors is the model's guess. No complicated formula, just 'you're probably similar to whatever's closest to you.'",
                  "Before feeding the data in, I scaled all four measurements onto the same numeric range using a technique called StandardScaler. This matters because KNN measures literal distance between points — without scaling, a feature measured in bigger numbers would unfairly dominate the 'closeness' calculation over a feature measured in smaller numbers, even if both are equally important.",
                ],
              },
              {
                heading: "Finding the Right Number of Neighbors",
                paragraphs: [
                  "The 'K' in K-Nearest Neighbors isn't fixed — you have to choose it, and the right choice isn't obvious upfront. Too few neighbors and the model gets overly sensitive to noise in the data; too many and it starts blurring together patterns that should stay distinct. So I tested every value of K from 1 to 20 and compared how accurate the model was at each one.",
                  "At K=5, the model reached 93.33% accuracy. Interestingly, the single best result actually came at K=1, reaching 96.67% — though in practice, K=1 can be a little risky on new data since it relies on just one neighbor's vote rather than a more stable group consensus.",
                ],
              },
              {
                heading: "How Well It Actually Worked",
                paragraphs: [
                  "Beyond a single accuracy number, I checked a confusion matrix, which shows exactly which species the model confused with which. Setosa turned out to be the easiest to identify correctly — it hit 100% precision, meaning every time the model predicted Setosa, it was right. The other two species, Versicolor and Virginica, are naturally a bit more similar to each other in their measurements, so that's where almost all of the model's occasional mistakes happened.",
                ],
              },
            ],
          },
          {
            slug: "unemployment-analysis",
            title: "What COVID-19 Actually Did to Unemployment, In the Data",
            excerpt:
              "No machine learning here — just careful analysis of real unemployment numbers across Indian states before and after lockdown.",
           image:
              "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1000&q=80",
            badgeColor: "#0284C7",
            date: "August 14, 2026",
            readTime: "4 min",
            content: [
              {
                heading: "The Problem",
                paragraphs: [
                  "Not every data science project is about building a predictive model — sometimes the real value is just in understanding what a dataset is actually telling you, carefully and honestly. This project analyzed unemployment rate data across Indian states from 2019 to 2020, specifically looking at how the Covid-19 lockdowns affected employment, and whether rural and urban areas were affected differently.",
                ],
              },
              {
                heading: "Getting the Data Ready",
                paragraphs: [
                  "The raw data came as two separate files, and before any real analysis could happen, I had to clean and align them — parsing dates properly and creating clear Month and Year columns so I could group and compare periods consistently. This kind of preparation work is unglamorous, but skipping it is exactly how you end up drawing wrong conclusions from data that looks fine at a glance but isn't actually structured correctly underneath.",
                ],
              },
              {
                heading: "What the Numbers Actually Showed",
                paragraphs: [
                  "Comparing the period before lockdown to the period after, the average unemployment rate rose from 9.76% to 13.28% — a real, measurable jump. But the single most dramatic number was the peak: unemployment hit 23.24% in May 2020, right at the height of lockdown restrictions.",
                  "Breaking the data down further, urban areas were hit noticeably harder than rural ones during the lockdown period — which makes intuitive sense given how differently rural and urban economies are structured, but it's one thing to expect that and another to actually see it clearly in the numbers.",
                ],
              },
              {
                heading: "Seeing the Regional Picture",
                paragraphs: [
                  "To understand which parts of the country were hit hardest, I built a heatmap comparing every state against every month — turning a huge table of numbers into something you could actually scan visually and immediately spot patterns in. That heatmap made it clear that Tripura experienced the highest unemployment levels of any state in the dataset, standing out well above the national pattern.",
                ],
              },
            ],
          },
          {
            slug: "car-price-prediction",
            title: "Predicting What a Used Car Is Actually Worth",
            excerpt:
              "Comparing three different regression models to see which one best predicts a used car's selling price — and what actually drives that price.",
           image:
              "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1000&q=80",
            badgeColor: "#0284C7",
            date: "August 14, 2026",
            readTime: "5 min",
            content: [
              {
                heading: "The Problem",
                paragraphs: [
                  "This project was about predicting the resale price of used cars — a genuinely practical problem, since anyone selling or buying a used car wants a fair sense of what it's actually worth. The dataset had 301 real car records, with details like present price, kilometers driven, fuel type, transmission type, how many previous owners it had, and the year it was made.",
                ],
              },
              {
                heading: "Turning Raw Details Into Useful Features",
                paragraphs: [
                  "The raw 'Year' column on its own isn't as useful as it sounds — a car made in a specific year matters less than how old that car actually is right now. So I engineered a new Car_Age feature by calculating the difference between the current year and each car's manufacture year, which turned out to be a much more directly meaningful number for the model to learn from.",
                  "I also had to convert categorical details like fuel type and transmission type into numbers the model could actually use, through a technique called label encoding.",
                ],
              },
              {
                heading: "Comparing Three Different Models",
                paragraphs: [
                  "Rather than settling on the first model that worked, I trained and compared three different regression approaches on the same data: Linear Regression, Random Forest, and Gradient Boosting. Linear Regression is the simplest of the three — it assumes price changes in a straight, predictable line with each feature — and it reached an R² score of 84.67%, a measure of how much of the price variation the model successfully explains.",
                  "Random Forest, which builds many decision trees and averages their predictions, performed noticeably better at 96.22%. But the strongest result came from Gradient Boosting, which builds trees one at a time, each one specifically correcting the mistakes of the ones before it — reaching an R² of 96.55%, with an average prediction error of just ₹0.62 lakhs on the actual selling price.",
                ],
              },
              {
                heading: "What Actually Drives the Price",
                paragraphs: [
                  "Beyond just making predictions, I pulled the feature importances out of the best-performing model to see what it had actually learned mattered most. Present Price, Car Age, and Kilometers Driven came out as the three strongest predictors of a car's final selling price — which lines up with real-world intuition, but it's more convincing to see the model independently arrive at the same conclusion from the raw numbers alone.",
                ],
              },
            ],
          },
        ],
      },
      {
        slug: "flyrank",
        name: "FlyRank AI",
        excerpt: "Coming soon.",
        image: "",
        badgeColor: "#F59E0B",
        content: [],
        projects: [],
      },
      {
        slug: "lilo",
        name: "LILO SWE Internship",
        excerpt: "Coming soon.",
        image: "",
        badgeColor: "#10B981",
        content: [],
        projects: [],
      },
    ],
  },
];
