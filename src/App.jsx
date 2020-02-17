import React from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('CRUD')}
    </div>
  );
};

export default App;
