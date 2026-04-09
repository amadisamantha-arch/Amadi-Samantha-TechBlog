const Categories = () => {
  const categories = [
    "Artificial Intelligence",
    "Web Development",
    "React & Frontend",
    "TypeScript",
    "Machine Learning",
    "Cybersecurity",
    "Startups & Tech",
    "Mobile Development",
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Categories
      </h3>

      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <span
            key={index}
            className="bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors px-5 py-2 rounded-2xl text-sm font-medium cursor-pointer"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
