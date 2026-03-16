// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    warning: vi.fn(),
  }
}));

import Converter from './Converter';

describe('Converter page', () => {
  it('renders upload-first empty state', () => {
    render(<Converter />);

    expect(screen.getByText('TXT转EPUB转换器')).toBeInTheDocument();
    expect(screen.getByText('上传TXT文件')).toBeInTheDocument();
    expect(screen.getByText('选择文件')).toBeInTheDocument();
    expect(screen.queryByText('转换控制')).not.toBeInTheDocument();
  });
});
