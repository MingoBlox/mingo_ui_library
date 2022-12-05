import React from "react";
import { action } from '@storybook/addon-actions';
import { Button } from "../components/Buttons/Button";
import { Outlined, Primary } from "../components/Buttons/Styling";

export default {
  title: "Button",
  component: Button
};

export const primary = () => {

  return (
    <Button onClick={action('You clicked!')} btnName='Primary' variant={Primary} />
  )

};

export const outlined = () => {

  return (
    <Button onClick={action('You clicked!')} btnName='Outlined' variant={Outlined} />
  )

};