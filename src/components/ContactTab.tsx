import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ExternalLink, Mail, FileText, Linkedin, Github } from "lucide-react";

const ContactTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactInfo = {
    name: "Gay Shin Lee",
    role: "UX Designer & Researcher",
    email: "gayshinlee@gmail.com",
    linkedin: "https://www.linkedin.com/in/gayshinlee/",
    github: "https://github.com/gayshinlee",
    resume: "/GAYSHINLEE_resume.pdf",
  };

  return (
    <motion.div
      className="fixed bottom-0 right-6 z-50 w-[320px] shadow-2xl rounded-t-xl overflow-hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Tab Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-t-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          {/* Avatar/Icon */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
            GL
          </div>
          <span className="font-medium text-zinc-900 dark:text-white text-sm">
            Contact
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Quick action - Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
          </a>
          {/* Expand/Collapse */}
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
          ) : (
            <ChevronUp className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white dark:bg-zinc-900 border-x border-b border-zinc-200 dark:border-zinc-700"
          >
            <div className="p-4 space-y-4">
              {/* Header Info */}
              <div className="text-center pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {contactInfo.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {contactInfo.role}
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-2">
                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">Email</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {contactInfo.email}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* LinkedIn */}
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">LinkedIn</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Connect with me</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* GitHub */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                    <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">GitHub</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">View my projects</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Resume */}
                <a
                  href={contactInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">Resume</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Download PDF</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Availability Status */}
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactTab;
