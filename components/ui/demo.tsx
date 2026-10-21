'use client';

import { EclipseButton } from '@/components/ui/eclipse-button';
import { Trash2 } from 'lucide-react';

export default function EclipseButtonVariants() {
  return (
    <div className="p-4 min-h-[200px] flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 @container">
      {/* 
        NOTE: This layout uses container queries (@sm, @lg, etc.).
        For this to work in your own application, the parent element of this component 
        must have the Tailwind CSS class "@container".
      */}
      <div className="grid w-full grid-cols-1 gap-8 @md:grid-cols-2 @lg:grid-cols-4 place-items-center">
        <EclipseButton variant="primary" text="Primary" />
        <EclipseButton variant="outline" text="Outline" />
        <EclipseButton variant="ghost" text="Ghost" />
        <EclipseButton 
          variant="destructive" 
          text="Delete" 
          leftIcon={<Trash2 className="w-4 h-4" />} 
        />
      </div>
    </div>
  );
}
