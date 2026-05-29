import { useState, useCallback } from "react";
import { useUser } from "@clerk/react";

export interface ProgressData {
  [moduleId: string]: number; // 0-100
}

export function useProgress() {
  const { user } = useUser();
  const key = user ? `progress_${user.id}` : null;

  const getProgress = useCallback((): ProgressData => {
    if (!key) return {};
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
      return {};
    }
  }, [key]);

  const [progress, setProgressState] = useState<ProgressData>(getProgress);

  const setModuleProgress = useCallback((moduleId: string, score: number) => {
    if (!key) return;
    const current = getProgress();
    const updated = { ...current, [moduleId]: score };
    localStorage.setItem(key, JSON.stringify(updated));
    setProgressState(updated);
  }, [key, getProgress]);

  const getModuleProgress = useCallback((moduleId: string): number => {
    return progress[moduleId] ?? 0;
  }, [progress]);

  const hasCompletedAssessment = useCallback((): boolean => {
    if (!user) return false;
    return !!localStorage.getItem(`assessment_done_${user.id}`);
  }, [user]);

  const saveAssessmentScore = useCallback((score: number) => {
    if (!user) return;
    localStorage.setItem(`assessment_done_${user.id}`, String(score));
  }, [user]);

  const getAssessmentScore = useCallback((): number | null => {
    if (!user) return null;
    const val = localStorage.getItem(`assessment_done_${user.id}`);
    return val ? Number(val) : null;
  }, [user]);

  return {
    progress,
    setModuleProgress,
    getModuleProgress,
    hasCompletedAssessment,
    saveAssessmentScore,
    getAssessmentScore,
  };
}
