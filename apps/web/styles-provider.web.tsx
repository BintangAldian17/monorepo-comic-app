// @ts-nocheck
"use client";
import { useServerInsertedHTML } from "next/navigation";
import { StyleSheet } from "react-native";

export function StylesProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet();
    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    );
  });
  return <>{children} </>;
}
