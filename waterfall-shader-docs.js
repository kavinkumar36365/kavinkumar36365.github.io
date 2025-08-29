/**
 * Waterfall Shader Implementation Documentation
 * =========================================
 * 
 * This implementation provides a CSS-based waterfall shader effect for web portfolios.
 * The shader creates animated water streams falling down the screen as a background effect.
 * 
 * Features:
 * - Pure CSS implementation (no WebGL required)
 * - Responsive design with mobile optimizations
 * - Multiple waterfall streams with varying speeds and delays
 * - Subtle ripple effect at the bottom
 * - Non-intrusive background effect (doesn't interfere with content)
 * 
 * Technical Implementation:
 * 
 * 1. Container Setup:
 *    - Fixed positioned container covering full viewport
 *    - Z-index of 0 to stay behind main content
 *    - Pointer events disabled to allow interaction with content above
 * 
 * 2. Waterfall Streams:
 *    - 6 individual waterfall elements positioned across the screen
 *    - CSS gradients create the water appearance (light blue to dark blue)
 *    - Keyframe animations control the falling motion
 *    - Varying durations (3-4.5s) and delays (0-2.5s) for natural randomness
 *    - Box shadows add glow effect
 * 
 * 3. Animation Keyframes:
 *    - waterfall-drop: Controls the falling motion and opacity changes
 *    - Height starts at 0 and grows to simulate water stream
 *    - Opacity fades in/out for smooth appearance/disappearance
 *    - Top position moves from -10% to 100% of viewport height
 * 
 * 4. Responsive Features:
 *    - Smaller waterfall widths on mobile devices
 *    - Reduced opacity on very small screens to prevent distraction
 *    - Maintains performance across different screen sizes
 * 
 * 5. Ripple Effect:
 *    - Bottom gradient effect simulates water ripples
 *    - Subtle scaling animation for movement
 * 
 * Browser Compatibility:
 * - Modern browsers with CSS3 animation support
 * - Graceful degradation on older browsers (static appearance)
 * 
 * Performance Considerations:
 * - Pure CSS animations use GPU acceleration when available
 * - Minimal DOM elements (7 total)
 * - No JavaScript processing required for animation
 * - Lightweight implementation suitable for portfolio sites
 * 
 * Usage:
 * 1. Include waterfall.css in your HTML
 * 2. Add the waterfall container HTML structure to your body
 * 3. Ensure main content has higher z-index values for proper layering
 * 
 * Customization:
 * - Adjust colors in the gradient definitions
 * - Modify animation durations and delays for different effects
 * - Change waterfall positions and sizes
 * - Adjust opacity values for more/less prominent effect
 * 
 * This waterfall shader provides a modern, dynamic background effect
 * that enhances visual appeal while maintaining excellent performance
 * and accessibility standards.
 */