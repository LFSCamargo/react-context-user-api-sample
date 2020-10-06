import React, { FC } from 'react';

type Props = {
  title: string;
};

export const TitlePage: FC<Props> = ({ title }) => <h1>{title}</h1>;
