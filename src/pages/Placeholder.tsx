import React from 'react'
import { Typography, Result } from 'antd'
import { useLocation } from 'react-router-dom'

const { Title, Text } = Typography

const titles: Record<string, string> = {
  '/suppliers': 'الموردون',
  '/inventory': 'المخازن والأصناف',
  '/accounting': 'المحاسبة',
  '/ledger': 'القيود والقوائم المالية',
  '/treasury': 'الخزينة',
  '/reports': 'التقارير',
  '/settings': 'الإعدادات',
  '/help': 'الشروحات',
}

export default function Placeholder() {
  const { pathname } = useLocation()
  const title = titles[pathname] || 'الصفحة'
  return (
    <div>
      <div className="page-header">
        <div>
          <Title level={3} style={{ margin: 0 }}>{title}</Title>
          <Text type="secondary">هذه الشاشة ضمن المرحلة التالية — الهيكل جاهز</Text>
        </div>
      </div>
      <Result status="info" title={title} subTitle="سيتم بناء هذه الشاشة بمطابقة كاملة للقطات HTML في المراحل القادمة." />
    </div>
  )
}
