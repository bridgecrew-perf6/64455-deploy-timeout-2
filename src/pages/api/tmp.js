import { getTranslation } from '@foundation/next';

export default async (req, res) => {
  const t = await getTranslation(req.query.locale ?? 'nl', 'auth');

  res.send({
    subject: t('email.verification.subject', { name: 'Site', ...req.query }),
  });
};
