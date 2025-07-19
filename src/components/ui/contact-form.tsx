import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './button';
import { LoadingSpinner } from './loading-spinner';
import { t } from '@/translate/language';

interface ContactFormProps {
  lang: 'pt' | 'en';
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm({ lang }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = lang === 'pt' ? 'Nome é obrigatório' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = lang === 'pt' ? 'Email é obrigatório' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'pt' ? 'Email inválido' : 'Invalid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = lang === 'pt' ? 'Mensagem é obrigatória' : 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = lang === 'pt' 
        ? 'Mensagem deve ter pelo menos 10 caracteres' 
        : 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 p-4 bg-green-600/20 border border-green-600/30 rounded-lg text-green-400"
        >
          <CheckCircle size={20} />
          <span className="text-sm">
            {lang === 'pt' 
              ? 'Mensagem enviada com sucesso! Retornarei em breve.' 
              : 'Message sent successfully! I\'ll get back to you soon.'}
          </span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 p-4 bg-red-600/20 border border-red-600/30 rounded-lg text-red-400"
        >
          <AlertCircle size={20} />
          <span className="text-sm">
            {lang === 'pt' 
              ? 'Erro ao enviar mensagem. Tente novamente.' 
              : 'Error sending message. Please try again.'}
          </span>
        </motion.div>
      )}

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t[lang].name}
            className={`w-full bg-zinc-800 border rounded-lg p-4 text-sm text-white placeholder-zinc-500 form-input focus:outline-none focus:ring-2 transition-all ${
              errors.name 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-zinc-700 focus:ring-red-600'
            }`}
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t[lang].email}
            className={`w-full bg-zinc-800 border rounded-lg p-4 text-sm text-white placeholder-zinc-500 form-input focus:outline-none focus:ring-2 transition-all ${
              errors.email 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-zinc-700 focus:ring-red-600'
            }`}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </div>
      </div>

      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder={t[lang].message}
          className={`w-full bg-zinc-800 border rounded-lg p-4 text-sm text-white placeholder-zinc-500 form-input focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-zinc-700 focus:ring-red-600'
          }`}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs mt-1"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-sm rounded-lg btn-ripple hover-glow disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <LoadingSpinner size="sm" color="text-white" />
              <span>
                {lang === 'pt' ? 'Enviando...' : 'Sending...'}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send size={16} />
              <span>{t[lang].send}</span>
            </div>
          )}
        </Button>
      </div>
    </motion.form>
  );
}