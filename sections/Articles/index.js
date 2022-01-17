import SubTitle from '@components/SubTitle';
import { useTranslation } from 'next-i18next';

const Articles = () => {
  const { t } = useTranslation('common');

  return (
    <div id="articles" style={{ textAlign: 'center', margin: '20px 0' }}>
      <SubTitle title="Articles" />
      <div
        style={{
          width: '200px',
          border: '1px rgba(170, 170, 170, 0.4) dashed',
          margin: '0 auto',
          padding: '12px 0',
        }}
      >
        <p>{t('inProgress')}</p>
        <p>{t('pleaseWait')}</p>
      </div>
    </div>
  );
};

export default Articles;
