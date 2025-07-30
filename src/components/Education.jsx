import { motion } from "motion/react";

const Education = ({ education }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative p-6 border border-white/10 rounded-2xl bg-gradient-to-br from-black/20 to-black/40 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group"
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
          education.status === 'current' 
            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
        }`}>
          {education.status === 'current' ? 'In Progress' : 'Completed'}
        </span>
      </div>

      {/* School Icon */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
            {education.school}
          </h3>
          <p className="text-sm text-gray-400">{education.period}</p>
        </div>
      </div>

      {/* Degree */}
      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
        {education.degree}
      </h4>

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">
        {education.description}
      </p>

      {/* Courses */}
      <div className="space-y-2">
        <h5 className="text-sm font-medium text-purple-300">Key Courses:</h5>
        <div className="flex flex-wrap gap-2">
          {education.courses.map((course, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-purple-500/20 text-purple-200 border border-purple-500/30 rounded-full hover:bg-purple-500/30 transition-colors"
            >
              {course}
            </span>
          ))}
        </div>
      </div>

      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default Education;
