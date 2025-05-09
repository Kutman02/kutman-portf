import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [contactMethodsRef, isContactMethodsVisible] = useScrollAnimation();
  const [formRef, isFormVisible] = useScrollAnimation(0.2);

  const contactMethods = [
    { platform: 'Email', icon: 'envelope', url: 'mailto:your.email@example.com' },
    { platform: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
    { platform: 'GitHub', icon: 'github', url: 'https://github.com/yourprofile' },
    { platform: 'Telegram', icon: 'telegram', url: 'https://t.me/yourprofile' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <div
            ref={contactMethodsRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 transform transition-all duration-700 ${
              isContactMethodsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:bg-gray-700/50 flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20">
                  <i className={`text-2xl text-blue-400 fas fa-${method.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{method.platform}</h3>
                  <p className="text-gray-300 text-sm">{method.url}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-red-200 font-semibold text-sm sm:text-base mb-4">
            {t('contact.formDisabled')}
          </div>
          <form
            ref={formRef}
            className={`space-y-6 transform transition-all duration-700 ${
              isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder={t('contact.name')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder={t('contact.email')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder={t('contact.message')}></textarea>
            </div>

            <button type="submit" className="button-primary w-full sm:w-auto">
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
