/* eslint-disable @next/next/no-img-element */
'use client';

import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import logoDark from 'assets/Logo-dark.svg';
import logoLight from 'assets/Logo-light.svg';
import { useTheme } from 'next-themes';

const TEXT = `لنفسِ أفقٌ و وديان، ولعلَّك تجد فى وادٍ غير واديك واديًا يَعُج بالسيول والعواصف! لربما يوجد بعضٌ من الحيوانات البرية المخيفة
خوفٌ وجهل بكيفية التعامل تحولت لوصمةِ عار..
هل هي كذلك؟
من يصفها ومن يوجهه بحل مشاكلها؟ 
من يقول بأنها هي الحياة تمرض فيها النفس كالجسد وأن هناك علاج للنفس مثلما يوجد للجسد..
من يرفع الجهل عن المريض النفسي؟
من يفهم شعورهم؟ وحجم مشكلاتهم؟ من يدعمهم لتخطيها والتأقلم عليها؟

إنها سايكوتوبيا، كيانٌ طلابي هدفه الأسمى التوعية بالصحةِ النفسية والطب النفسي، هدفه أن يقول للعالم أجمع أن للصحة النفسية أهمية قدرها لا يقل أهمية عن أهمية الصحة الجسدية.
كيانٌ طلابي رؤيته الأرقى هي مجتمعٌ واعٍ بالصحة النفسية في سبيل تحقيق مجتمع خالٍ من التشوهات والاضطرابات النفسية.

هي سايكوتوبيا، مدينة رسمناها مثالية فى مخيلاتنا، خاليةً من المشاكل والاضطرابات النفسية هدفها تقبل الآخر والوعي بمشاكل فئة ليست بالقليلة!
هدفها رفع وصمة العار التي تقف في طريق علاج الآلاف ولربما تودى بحياتهم بجهل غيرهم!
من سيخبر الأبدية أننا مررنا ها هنا؟
بالتطوع نترك أثرًا وهذا الأثر نريده أن يستمر، أن يفهم و يعي المجتمع، أن يعي الجميع بنوعٍ مختلف من المشاكل قد يعرقل حياتهم.

هي سايكوتوبيا المدينة الفاضلة حيثُ الأمل والنور والمعرفة.`;

const About = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <img
          src={resolvedTheme === 'dark' ? logoDark.src : logoLight.src}
          alt=""
          style={{
            maxHeight: '250px',
          }}
        />
      </Box>
      <Box overflow="hidden" mb="30px" sx={{ direction: 'rtl' }}>
        {TEXT.split('\n').map((line, index) => (
          <>
            {' '}
            <Typography
              variant="body2"
              color="text.primary"
              fontWeight={500}
              fontSize="18px"
              fontFamily={"'IBM Plex Sans Arabic', sans-serif"}
              key={index}
            >
              {line}
            </Typography>
          </>
        ))}
      </Box>
    </Container>
  );
};

export default About;
